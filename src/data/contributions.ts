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
    logo: '/src/assets/clj-kondo.svg',
    technology: ['Clojure', 'Static Analysis', 'Linting'],
    stats: {
      category: 'Developer Tools',
    },
    contributions: [
      {
        title:
          'Performance Improvement: Refactor lint-cond-constants! to Eliminate sexpr Usage',
        description:
          'Refactored the lint-cond-constants! function to remove expensive sexpr usage, improving performance in linting operations.',
        impact:
          'Enhances linting speed and efficiency for conditional expressions',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2759',
        date: '2026-01-25',
        tags: ['performance', 'refactor', 'linting'],
      },
      {
        title: 'Fix False Positive for Throw with String in CLJS',
        description:
          'Fixed a false positive where throwing a string in ClojureScript would incorrectly trigger a type mismatch warning.',
        impact:
          'Improves accuracy of type checking for throw expressions in CLJS',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2763',
        date: '2026-01-25',
        tags: ['bugfix', 'cljs', 'type-checking'],
      },
      {
        title: 'New Linter: aliased-referred-var',
        description:
          'Implemented a new linter :aliased-referred-var that warns when a var is both referred and accessed via an alias in the same namespace.',
        impact: 'Prevents namespace confusion and improves code clarity',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2734',
        date: '2026-01-19',
        tags: ['linter', 'new-feature', 'namespaces'],
      },
      {
        title: 'New Linter: is-message-not-string',
        description:
          'Created a linter :is-message-not-string that warns when clojure.test/is receives a non-string message argument.',
        impact:
          'Enhances testing code quality by enforcing string messages in assertions',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2752',
        date: '2026-01-19',
        tags: ['linter', 'new-feature', 'testing'],
      },
      {
        title: 'Fix def + defmethod :def-fn Warning Location',
        description:
          'Ensured that def + defmethod combinations trigger :def-fn warnings with valid source locations.',
        impact: 'Improves accuracy of location reporting for def-fn linter',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2757',
        date: '2026-01-19',
        tags: ['bugfix', 'linter', 'location'],
      },
      {
        title: 'Enhance unused-excluded-var Linter with Location Metadata',
        description:
          'Added location metadata to excluded vars in ns-unmap for the unused-excluded-var linter.',
        impact: 'Fixes location reporting for unused exclusions',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2754',
        date: '2026-01-19',
        tags: ['enhancement', 'linter', 'metadata'],
      },
      {
        title: 'Fix Gensym Bindings in Nested Syntax Quotes',
        description:
          'Fixed recognition of gensym bindings in nested syntax quotes for proper analysis.',
        impact: 'Improves macro analysis accuracy',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2751',
        date: '2026-01-19',
        tags: ['bugfix', 'macros', 'analysis'],
      },
      {
        title: 'Fix Primitive Array Class Syntax Recognition',
        description:
          'Resolved regression where primitive array class syntax (e.g., byte/1, int/2) was not recognized in type checking.',
        impact: 'Enables proper type checking for Clojure 1.12 array syntax',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2748',
        date: '2026-01-19',
        tags: ['bugfix', 'type-checking', 'clojure-1.12'],
      },
      {
        title: 'Extend equals-expected-position Linter to not=',
        description:
          'Extended the :equals-expected-position linter to also warn for not= when the expected value is not first.',
        impact: 'Improves consistency in equality checks',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2740',
        date: '2026-01-19',
        tags: ['enhancement', 'linter', 'equality'],
      },
      {
        title: 'Fix False Positive for Throw in CLJS with Non-Throwable Values',
        description:
          'Fixed false positive warnings for throw in ClojureScript when throwing non-throwable values.',
        impact: 'Reduces false warnings in CLJS throw expressions',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2750',
        date: '2026-01-19',
        tags: ['bugfix', 'cljs', 'throw'],
      },
      {
        title: 'Enhance unreachable-code Linter for Reader Conditionals',
        description:
          'Updated the unreachable-code linter to warn when :default does not come last in reader conditionals.',
        impact: 'Catches unreachable code in conditional reader forms',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2738',
        date: '2026-01-19',
        tags: ['enhancement', 'linter', 'reader-conditionals'],
      },
      {
        title: 'Add duplicate refer linter and tests',
        description:
          'Introduce a new linter `:duplicate-refer` that warns on duplicate entries in `:refer` vectors within `:require` statements. This change includes documentation updates and tests to ensure proper functionality of the new linter.',
        impact:
          'Improves code quality by detecting duplicate references in namespace requires',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2737',
        date: '2026-01-14',
        tags: ['linter', 'new-feature', 'code-quality'],
      },
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
        title: 'New Linter: Condition Always True for clojure.test/is',
        description:
          'Implemented a linter to warn on literals and constants used in clojure.test/is forms that always evaluate to true, preventing common testing mistakes.',
        impact:
          'Improves test reliability by catching always-true conditions in assertions',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2722',
        date: '2026-01-08',
        tags: ['linter', 'testing', 'new-feature'],
      },
      {
        title: 'Type Checking Support for Clojure Test Functions',
        description:
          'Added comprehensive type checking for clojure.test functions like is, testing, deftest, etc., enabling static analysis to catch type mismatches in test code.',
        impact:
          'Enhances type safety in testing code, preventing runtime type errors',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2706',
        date: '2026-01-08',
        tags: ['type-system', 'testing', 'static-analysis'],
      },
      {
        title: 'New Linter: Redundant Format',
        description:
          'Implemented a linter to warn when format strings are used without any format specifiers, indicating potential misuse of formatting functions.',
        impact:
          'Helps developers identify unnecessary use of format functions, improving code clarity',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2716',
        date: '2026-01-08',
        tags: ['linter', 'formatting', 'new-feature'],
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
      {
        title: 'Add class type and type checking support',
        description:
          'Introduce a new type `class` and enhance type checking for class-related functions including `instance?`, `cast`, `class`, `make-array`, `bases`, and `supers`. This improves type safety and error reporting for functions that require class arguments, ensuring better validation during linting.',
        impact:
          'Improves type safety and error reporting for class-related functions',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2725',
        date: '2026-01-10',
        tags: ['type-system', 'class', 'static-analysis'],
      },
      {
        title: 'Add type inst and support for inst-ms types',
        description:
          'Introduced a new type `inst` and enhanced type checking for `inst-ms` and `inst-ms*`. These changes ensure that these types are correctly handled in the linter, improving type safety and providing clearer error messages for type mismatches.',
        impact:
          'Improves type safety and error reporting for instant and millisecond types in Clojure code.',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2733',
        date: '2026-01-14',
        tags: ['type-system', 'inst', 'static-analysis', 'bugfix'],
      },
      {
        title: 'Rename Linter for Unresolved Excluded Vars',
        description:
          'Renamed the linter from :refer-clojure-exclude-unresolved-var to :unresolved-excluded-var for consistency across the codebase. Updated references in documentation, configuration, and test files.',
        impact:
          'Improves naming consistency and maintainability in linter definitions',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2705',
        date: '2025-12-31',
        tags: ['refactoring', 'linter', 'naming'],
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
        title: 'Fix Case-Sensitive Sorting in sort-ns-references',
        description:
          'Fixed the :sort-ns-references? option to perform case-insensitive string sorting, preventing uppercase namespace references from sorting before lowercase ones. Modified the node-sort-string function and added a test case.',
        impact:
          'Improves code formatting consistency by ensuring predictable namespace reference ordering',
        prLink: 'https://github.com/weavejester/cljfmt/pull/389',
        date: '2026-01-20',
        tags: ['bugfix', 'sorting', 'case-insensitive'],
      },
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
      {
        title: 'Ignore .clj config files by default',
        description:
          'Ignore .clj configuration files by default for security. Introduce the :read-clj-config-files? option to opt in to reading .clj config files. When a .clj config file is detected but the option is not enabled, emit a warning and fall back to .edn config files if available.',
        impact:
          'Improves security by avoiding execution of arbitrary Clojure config code while preserving compatibility via an opt-in and fallback to .edn. Provides clearer warnings when .clj files are present.',
        date: '2026-01-28',
        tags: ['security', 'configuration', 'compatibility'],
        prLink: 'https://github.com/weavejester/cljfmt/pull/392',
      },
      {
        title: 'Add :normalize-newlines-at-file-end? option',
        description:
          ':normalize-newlines-at-file-end? ensures files end with exactly one newline character. When enabled, cljfmt removes multiple trailing blank lines and guarantees a single newline at EOF for consistent file endings.',
        impact:
          'Produces consistent file endings across the codebase, reduces accidental trailing blank lines, and prevents spurious diffs in version control.',
        date: '2026-01-28',
        tags: ['formatting', 'newline', 'option'],
        prLink: 'https://github.com/weavejester/cljfmt/pull/394',
      },
    ],
  },
  {
    name: 'Calva',
    description: 'Clojure & ClojureScript Interactive Programming for VS Code',
    repository: 'https://github.com/BetterThanTomorrow/calva',
    website: 'https://calva.io',
    logo: '/src/assets/calva.png',
    technology: ['TypeScript', 'VS Code Extension', 'Developer Tools'],
    stats: {
      category: 'Developer Tools',
    },
    contributions: [
      {
        title:
          'Improve backspace and deleteForward functions for reader macro hash deletion',
        description:
          'Enhanced the backspace and deleteForward functions to correctly handle deletion of reader macro hashes (#) when the cursor is positioned immediately after or before them. This prevents orphaned hashes and maintains code integrity during editing.',
        impact:
          'Improves editor behavior and user experience when deleting reader macros in Clojure code',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3002',
        date: '2026-01-30',
        tags: ['enhancement', 'editor', 'reader-macros'],
      },
      {
        title: 'Add Support for Pair/Triple Selecting in condp',
        description:
          'Enhanced grow selection to recognize test/result pairs and test/:>>/function triples within condp expressions. Properly handles default values (unpaired elements at the end).',
        impact:
          'Improves code selection experience for condp forms, enabling intuitive pair and triple selection',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/2998',
        date: '2026-01-30',
        tags: ['enhancement', 'paredit', 'selection', 'conditionals'],
      },
      {
        title: 'Add Support for Growing Selection in case Forms',
        description:
          'Enhanced grow selection to handle value/result pairs in case forms, similar to existing support for cond and binding forms like let.',
        impact:
          'Expands selections correctly when working with conditional expressions in case statements',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/2997',
        date: '2026-01-30',
        tags: ['enhancement', 'paredit', 'selection', 'conditionals'],
      },
      {
        title: 'Add Grow Selection Support for :let Binding Pairs',
        description:
          'Enhanced grow selection to recognize :let binding pairs within for loops, doseq, and other binding forms. Updated selection logic to detect :let vectors and expand through binding pairs before selecting the entire vector.',
        impact:
          'Improves code selection experience for :let bindings, aligning behavior with standard let functionality',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/2989',
        date: '2026-01-30',
        tags: ['enhancement', 'paredit', 'selection', 'bindings'],
      },
      {
        title: 'Add Pair Selecting Support for cond Forms',
        description:
          'Implemented pair selection functionality for cond forms, enabling users to select test/expression pairs within conditional forms. Introduced conditionalForms constant and dynamic offset calculation for maintainable architecture.',
        impact:
          'Accelerates conditional logic navigation and editing, maintaining consistency with existing pair-selection features',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/2992',
        date: '2026-01-30',
        tags: ['enhancement', 'paredit', 'selection', 'conditionals'],
      },
      {
        title: 'Add Pair Selecting Support for cond-> and cond->> Forms',
        description:
          'Extended pair selection functionality to cond-> and cond->> threading forms, allowing intelligent selection of test/expr pairs in threaded conditionals.',
        impact:
          'Streamlines code refactoring workflows for threaded conditional forms',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/2996',
        date: '2026-01-30',
        tags: ['enhancement', 'paredit', 'selection', 'threading'],
      },
    ],
  },
  {
    name: 'Logseq',
    description:
      'A privacy-first, open-source knowledge base that works on top of local plain-text Markdown and Org-mode files',
    repository: 'https://github.com/logseq/logseq',
    website: 'https://logseq.com',
    logo: '/src/assets/logseq.png',
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
