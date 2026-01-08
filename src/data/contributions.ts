/**
 * Open Source Contributions
 * Grouped by project for professional presentation
 */

export interface Contribution {
  title: string;
  description: string;
  impact?: string;
  prLink?: string;
  date: string;
  tags?: string[];
}

export interface Project {
  name: string;
  description: string;
  repository: string;
  website?: string;
  logo?: string;
  technology: string[];
  contributions: Contribution[];
  stats?: {
    stars?: number;

    category?: string;
  };
}

export const projects: Project[] = [
  {
    name: 'clj-kondo',
    description:
      'A static analyzer and linter for Clojure code that sparks joy',
    repository: 'https://github.com/clj-kondo/clj-kondo',
    website: 'https://github.com/clj-kondo/clj-kondo',
    technology: ['Clojure', 'Static Analysis', 'Linting'],
    stats: {
      category: 'Developer Tools',
    },
    contributions: [
      {
        title: 'New Linter: unused-excluded-var',
        description:
          'Implemented a new linter to warn on unused vars in :refer-clojure :exclude, helping developers maintain cleaner code by identifying unnecessary exclusions.',
        impact: 'Improves code quality by detecting redundant exclusions',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2679',
        date: '2025-12-31',
        tags: ['linter', 'code-quality', 'new-feature'],
      },
      {
        title: 'New Linter: destructured-or-always-evaluates',
        description:
          'Created a linter to warn on s-expressions in :or defaults in map destructuring, preventing common pitfalls where developers expect lazy evaluation but get eager evaluation.',
        impact:
          'Prevents subtle bugs in destructuring patterns that are hard to debug',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2702',
        date: '2025-12-31',
        tags: ['linter', 'bug-prevention', 'new-feature'],
      },
      {
        title: 'New Linter: unquote-not-syntax-quoted',
        description:
          'Developed a linter to warn on ~ and ~@ usage outside syntax-quote (`), catching common macro-related mistakes early in development.',
        impact:
          'Reduces macro-related errors and improves developer experience',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2681',
        date: '2025-12-18',
        tags: ['linter', 'macros', 'new-feature'],
      },
      {
        title: 'New Linter: unresolved-excluded-var',
        description:
          'Built a linter to warn on non-existing vars in :refer-clojure :exclude, preventing typos and references to non-existent symbols.',
        impact: 'Catches namespace configuration errors at analysis time',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2675',
        date: '2025-12-22',
        tags: ['linter', 'validation', 'new-feature'],
      },
      {
        title: 'Array Type System Support',
        description:
          'Added comprehensive type checking support for array operations including to-array, alength, aget, aset, and aclone functions. Introduced new array type for better static analysis.',
        impact:
          'Enables type checking for Java array interop operations, catching type errors at lint time',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2697',
        date: '2025-12-29',
        tags: ['type-system', 'java-interop', 'static-analysis'],
      },
      {
        title: 'Enhanced Type Checking for Collections',
        description:
          'Extended type checking support to sorted-map-by, sorted-set, and sorted-set-by functions, improving static analysis coverage for sorted collection operations.',
        impact:
          'Better type inference and error detection for sorted collection usage',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2694',
        date: '2025-12-27',
        tags: ['type-system', 'collections'],
      },
      {
        title: 'Fix Unexpected Recur False Positive',
        description:
          'Fixed false positive :unexpected-recur warning when recur is used inside clojure.core.match/match expressions, improving accuracy of control flow analysis.',
        impact:
          'Eliminates false warnings in legitimate recur usage with pattern matching',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2672',
        date: '2025-12-16',
        tags: ['bugfix', 'control-flow'],
      },
      {
        title: 'Namespaced Maps Analysis',
        description:
          'Implemented analysis to report unresolved namespace for namespaced maps with unknown aliases, catching configuration errors in namespaced keyword usage.',
        impact: 'Better error reporting for namespaced map syntax',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2686',
        date: '2025-12-20',
        tags: ['analysis', 'namespaces'],
      },
      {
        title:
          'Ratio Type Support with Numerator and Denominator functions type checking',
        description:
          "Add comprehensive :ratio type support to clj-kondo's type system, enabling type checking for the numerator and denominator functions.",
        impact:
          'Improves type safety when working with ratios in Clojure code.',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2684',
        date: '2025-12-20',
        tags: ['type-system', 'ratio', 'static-analysis', 'core-functions'],
      },
      {
        title: 'Type Support for repeatedly function',
        description: 'Added type definitions for repeatedly.',
        impact: 'More comprehensive type checking across Clojure core library',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2674',
        date: '2025-12-16',
        tags: ['type-system', 'core-functions'],
      },
      {
        title: 'Fix `:refer-clojure :exclude` handling for ignored vars',
        description:
          'Improved handling of `:refer-clojure :exclude` to properly ignore elements with `#_clj-kondo/ignore` metadata.',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2717',
        date: '2026-01-08',
      },
      {
        title: 'Fix regression for unused binding warnings',
        description:
          "Resolved a regression causing false positives for unused binding warnings in `~'~` unquote expressions.",
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2715',
        date: '2026-01-07',
      },
      {
        title: 'Fix unused value linter for `defmethod` bodies',
        description:
          'Updated the unused value linter to allow unused values in `defmethod` bodies.',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2714',
        date: '2026-01-06',
      },
    ],
  },
  {
    name: 'cljfmt',
    description:
      'A tool for formatting Clojure code according to consistent style guidelines',
    repository: 'https://github.com/weavejester/cljfmt',
    website: 'https://github.com/weavejester/cljfmt',
    technology: ['Clojure', 'Code Formatting', 'Developer Tools'],
    stats: {
      category: 'Developer Tools',
    },
    contributions: [
      {
        title: 'Configurable Column Alignment',
        description:
          'Introduced :align-single-column-lines? configuration option to control column alignment behavior in maps and forms. This prevents excessive horizontal padding when forms contain multi-line values.',
        impact:
          'Improves formatting consistency and readability for complex data structures',
        prLink: 'https://github.com/weavejester/cljfmt/pull/383',
        date: '2025-12-23',
        tags: ['formatting', 'configuration', 'new-feature'],
      },
    ],
  },
  {
    name: 'Logseq',
    description:
      'A privacy-first, open-source knowledge base that works on top of local plain-text Markdown and Org-mode files',
    repository: 'https://github.com/logseq/logseq',
    website: 'https://logseq.com',
    technology: ['ClojureScript', 'React', 'Electron', 'Knowledge Management'],
    stats: {
      category: 'Productivity',
    },
    contributions: [
      {
        title: 'Autopair Parenthesis Behavior Improvements',
        description:
          'Enhanced autopairing logic for parentheses to only trigger in appropriate contexts (e.g., when preceded by whitespace), preventing unwanted insertions in URLs and other patterns.',
        impact:
          'Significantly improved editor UX by eliminating disruptive autocomplete behavior',
        prLink: 'https://github.com/logseq/logseq/pull/7379',
        date: '2022-11-22',
        tags: ['editor', 'UX', 'input-handling'],
      },
      {
        title: 'Fix Task List Checkbox Toggle Behavior',
        description:
          'Resolved edge cases in task list checkbox toggling to preserve expected casing and behavior. Implemented safer replace semantics for consistent checkbox state transitions.',
        impact:
          'Ensures reliable task management functionality, critical for productivity workflows',
        prLink: 'https://github.com/logseq/logseq/pull/11079',
        date: '2024-03-06',
        tags: ['bugfix', 'tasks', 'editor'],
      },
      {
        title: 'Fix Image Navigation Order in Maximize Mode',
        description:
          'Corrected image navigation logic in maximize (lightbox) mode to maintain proper order when switching between images. Fixed inconsistent index calculations causing confusing navigation.',
        impact:
          'Enhanced image viewing experience for users working with visual content',
        prLink: 'https://github.com/logseq/logseq/pull/6068',
        date: '2022-07-26',
        tags: ['bugfix', 'UI', 'images'],
      },
    ],
  },
];

// Helper function to get all contributions sorted by date
export function getAllContributions(): Array<
  Contribution & { projectName: string; projectRepo: string }
> {
  return projects
    .flatMap((project) =>
      project.contributions.map((contrib) => ({
        ...contrib,
        projectName: project.name,
        projectRepo: project.repository,
      })),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Helper function to get contribution stats
export function getContributionStats() {
  const totalProjects = projects.length;
  const totalContributions = projects.reduce(
    (sum, project) => sum + project.contributions.length,
    0,
  );
  const technologies = Array.from(
    new Set(projects.flatMap((p) => p.technology)),
  );

  return {
    totalProjects,
    totalContributions,
    technologies,
  };
}
