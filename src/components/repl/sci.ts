/**
 * Real Clojure for the hero REPL: SCI (via Scittle) loaded on first
 * interaction, never on page load, so it costs nothing until someone
 * actually wants to type Clojure.
 */
// Served as-is from public/ (Scittle 0.8.33, EPL-1.0) so the bundler
// never touches it. Bump the file name together with the version.
const scittleUrl = '/vendor/scittle-0.8.33.js';

export interface SiteBridge {
  scroll: (id: string) => void;
  theme: (name?: string) => string;
}

export interface SciResult {
  /** Lines written with println/prn during evaluation. */
  printed: string[];
  /** The printed (pr-str) value of the last form. */
  value: string;
}

export type SciEval = (src: string) => SciResult;

interface ScittleCore {
  eval_string: (src: string) => unknown;
  eval_script_tags: (tags?: Element) => void;
}

declare global {
  interface Window {
    scittle?: { core: ScittleCore };
    __jrSite?: SiteBridge & { ready: () => void };
    __jrLast?: unknown;
  }
}

// The site commands live in public/repl/site.cljs, referenced by a
// <script type="application/x-scittle" data-repl-site> tag in the hero.
// Browsers ignore that type, so the file is only fetched once Scittle
// evaluates the tag. Its last form calls window.__jrSite.ready().
const SITE_TAG = 'script[type="application/x-scittle"][data-repl-site]';
const READY_TIMEOUT_MS = 8000;

let loading: Promise<SciEval | null> | null = null;

/**
 * Evaluate with console output captured: Scittle's println writes to
 * console.log, and evaluation is synchronous, so a temporary wrapper
 * collects exactly what this form printed.
 */
function evaluate(core: ScittleCore, src: string): SciResult {
  const printed: string[] = [];
  const log = console.log;
  console.log = (...args: unknown[]) => {
    printed.push(args.map(String).join(' '));
  };
  try {
    window.__jrLast = core.eval_string(src);
    const value = core.eval_string('(pr-str js/__jrLast)');
    return { printed, value: String(value) };
  } finally {
    console.log = log;
    window.__jrLast = undefined;
  }
}

/**
 * Load Scittle once, then evaluate site.cljs. Resolves to null when
 * either can't load (offline, blocked…), so the caller can fall back.
 */
export function loadSci(site: SiteBridge): Promise<SciEval | null> {
  loading ??= new Promise((resolve) => {
    const tag = document.querySelector(SITE_TAG);
    if (!tag) return resolve(null);

    // eval_script_tags fetches site.cljs asynchronously with no
    // completion or error callback, so site.cljs signals ready itself
    // and a timeout covers the case where it never does.
    const timer = setTimeout(() => resolve(null), READY_TIMEOUT_MS);
    const finish = (value: SciEval | null) => {
      clearTimeout(timer);
      resolve(value);
    };

    const script = document.createElement('script');
    script.src = scittleUrl;
    script.async = true;
    script.onload = () => {
      const core = window.scittle?.core;
      if (!core) return finish(null);
      window.__jrSite = {
        ...site,
        ready: () => finish((src) => evaluate(core, src)),
      };
      core.eval_script_tags(tag);
    };
    script.onerror = () => finish(null);
    document.head.append(script);
  });
  return loading;
}
