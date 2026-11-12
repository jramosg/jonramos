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
}

declare global {
  interface Window {
    scittle?: { core: ScittleCore };
    __jrSite?: SiteBridge;
    __jrLast?: unknown;
  }
}

// Site commands, defined once in the user namespace. They reach the
// page through window.__jrSite.
const PRELUDE = `
(defrecord SoftwareEngineer [name since stack base])

(defn software-engineer []
  (->SoftwareEngineer "Jon Ramos" 2016
                      '[Clojure ClojureScript Datomic] "Urnieta"))

(def jon (software-engineer))

(defn skills []
  [:clojure :clojurescript :datomic :re-frame :react :astro
   :typescript :postgresql])

(defn- go! [id]
  (.scroll js/__jrSite (name id))
  id)

(defn experience [] (go! :experience))
(defn projects [] (go! :projects))
(defn contact [] (go! :contact))

(defn theme
  ([] (keyword (.theme js/__jrSite)))
  ([t]
   (when-not (#{:light :dark} t)
     (throw (ex-info "theme expects :light or :dark" {:got t})))
   (keyword (.theme js/__jrSite (name t)))))

(defn help []
  (println ";; This is real Clojure (SCI). Try:")
  (println ";;   (skills)  (projects)  (contact)  (theme :dark)")
  (println ";;   (map inc [1 2 3])")
  (println ";;   (defn sq [x] (* x x)) (sq 12)")
  (println ";;   (frequencies \\"txirimiri\\")"))
`;

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

/** Load Scittle once; resolves to null if it can't load (offline…). */
export function loadSci(site: SiteBridge): Promise<SciEval | null> {
  loading ??= new Promise((resolve) => {
    window.__jrSite = site;
    const script = document.createElement('script');
    script.src = scittleUrl;
    script.async = true;
    script.onload = () => {
      const core = window.scittle?.core;
      if (!core) return resolve(null);
      try {
        core.eval_string(PRELUDE);
        resolve((src) => evaluate(core, src));
      } catch {
        resolve(null);
      }
    };
    script.onerror = () => resolve(null);
    document.head.append(script);
  });
  return loading;
}
