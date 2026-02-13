/**
 * Open Source Contributions
 * Grouped by project for professional presentation
 */

export type ContributionTier = 'featured' | 'notable' | 'minor';

export interface Contribution {
  title: string;
  description: string;
  impact?: string;
  prLink?: string;
  date: string;
  tags?: string[];
  tier?: ContributionTier; // featured = major new features, notable = enhancements/important fixes, minor = small fixes/refactors
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
        title: 'New Linter: redundant-declare',
        description:
          'Introduced a new linter :redundant-declare that warns when declare is used after a var is already defined in the same namespace. Updated documentation and configuration to include this new linter with comprehensive tests to ensure correct functionality and behavior.',
        impact:
          'Prevents redundant declare statements and improves code clarity',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2769',
        date: '2026-02-09',
        tags: ['linter', 'new-feature', 'declarations'],
        tier: 'featured',
      },
      {
        title: 'Add Type Support for Future-Related Functions',
        description:
          'Introduced comprehensive type support for functions related to futures, including future, future-call, future-done?, future-cancel, and future-cancelled?. Added tests to ensure correct linting behavior for these types.',
        impact:
          'Enhances type system coverage for concurrent programming, enabling better static analysis of future-based code',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2765',
        date: '2025-02-01',
        tags: ['type-system', 'concurrency', 'futures', 'testing'],
        tier: 'notable',
      },
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
        tier: 'notable',
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
        tier: 'minor',
      },
      {
        title: 'New Linter: aliased-referred-var',
        description:
          'Implemented a new linter :aliased-referred-var that warns when a var is both referred and accessed via an alias in the same namespace.',
        impact: 'Prevents namespace confusion and improves code clarity',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2734',
        date: '2026-01-19',
        tags: ['linter', 'new-feature', 'namespaces'],
        tier: 'featured',
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
        tier: 'featured',
      },
      {
        title: 'Fix def + defmethod :def-fn Warning Location',
        description:
          'Ensured that def + defmethod combinations trigger :def-fn warnings with valid source locations.',
        impact: 'Improves accuracy of location reporting for def-fn linter',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2757',
        date: '2026-01-19',
        tags: ['bugfix', 'linter', 'location'],
        tier: 'minor',
      },
      {
        title: 'Enhance unused-excluded-var Linter with Location Metadata',
        description:
          'Added location metadata to excluded vars in ns-unmap for the unused-excluded-var linter.',
        impact: 'Fixes location reporting for unused exclusions',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2754',
        date: '2026-01-19',
        tags: ['enhancement', 'linter', 'metadata'],
        tier: 'minor',
      },
      {
        title: 'Fix Gensym Bindings in Nested Syntax Quotes',
        description:
          'Fixed recognition of gensym bindings in nested syntax quotes for proper analysis.',
        impact: 'Improves macro analysis accuracy',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2751',
        date: '2026-01-19',
        tags: ['bugfix', 'macros', 'analysis'],
        tier: 'minor',
      },
      {
        title: 'Fix Primitive Array Class Syntax Recognition',
        description:
          'Resolved regression where primitive array class syntax (e.g., byte/1, int/2) was not recognized in type checking.',
        impact: 'Enables proper type checking for Clojure 1.12 array syntax',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2748',
        date: '2026-01-19',
        tags: ['bugfix', 'type-checking', 'clojure-1.12'],
        tier: 'notable',
      },
      {
        title: 'Extend equals-expected-position Linter to not=',
        description:
          'Extended the :equals-expected-position linter to also warn for not= when the expected value is not first.',
        impact: 'Improves consistency in equality checks',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2740',
        date: '2026-01-19',
        tags: ['enhancement', 'linter', 'equality'],
        tier: 'minor',
      },
      {
        title: 'Fix False Positive for Throw in CLJS with Non-Throwable Values',
        description:
          'Fixed false positive warnings for throw in ClojureScript when throwing non-throwable values.',
        impact: 'Reduces false warnings in CLJS throw expressions',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2750',
        date: '2026-01-19',
        tags: ['bugfix', 'cljs', 'throw'],
        tier: 'minor',
      },
      {
        title: 'Enhance unreachable-code Linter for Reader Conditionals',
        description:
          'Updated the unreachable-code linter to warn when :default does not come last in reader conditionals.',
        impact: 'Catches unreachable code in conditional reader forms',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2738',
        date: '2026-01-19',
        tags: ['enhancement', 'linter', 'reader-conditionals'],
        tier: 'notable',
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
        tier: 'featured',
      },
      {
        title: 'New Linter: unused-excluded-var',
        description:
          'Implemented a new linter to warn on unused vars in :refer-clojure :exclude, helping developers maintain cleaner code by identifying unnecessary exclusions.',
        impact: 'Improves code quality by detecting redundant exclusions',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2679',
        date: '2025-12-31',
        tags: ['linter', 'code-quality', 'new-feature'],
        tier: 'featured',
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
        tier: 'featured',
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
        tier: 'featured',
      },
      {
        title: 'New Linter: unresolved-excluded-var',
        description:
          'Built a linter to warn on non-existing vars in :refer-clojure :exclude, preventing typos and references to non-existent symbols.',
        impact: 'Catches namespace configuration errors at analysis time',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2675',
        date: '2025-12-22',
        tags: ['linter', 'validation', 'new-feature'],
        tier: 'featured',
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
        tier: 'featured',
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
        tier: 'notable',
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
        tier: 'minor',
      },
      {
        title: 'Namespaced Maps Analysis',
        description:
          'Implemented analysis to report unresolved namespace for namespaced maps with unknown aliases, catching configuration errors in namespaced keyword usage.',
        impact: 'Better error reporting for namespaced map syntax',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2686',
        date: '2025-12-20',
        tags: ['analysis', 'namespaces'],
        tier: 'notable',
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
        tier: 'notable',
      },
      {
        title: 'Type Support for repeatedly function',
        description: 'Added type definitions for repeatedly.',
        impact: 'More comprehensive type checking across Clojure core library',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2674',
        date: '2025-12-16',
        tags: ['type-system', 'core-functions'],
        tier: 'minor',
      },
      {
        title: 'Fix `:refer-clojure :exclude` handling for ignored vars',
        description:
          'Improved handling of `:refer-clojure :exclude` to properly ignore elements with `#_clj-kondo/ignore` metadata.',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2717',
        date: '2026-01-08',
        tier: 'minor',
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
        tier: 'featured',
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
        tier: 'notable',
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
        tier: 'featured',
      },
      {
        title: 'Fix regression for unused binding warnings',
        description:
          "Resolved a regression causing false positives for unused binding warnings in `~'~` unquote expressions.",
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2715',
        date: '2026-01-07',
        tier: 'minor',
      },
      {
        title: 'Fix unused value linter for `defmethod` bodies',
        description:
          'Updated the unused value linter to allow unused values in `defmethod` bodies.',
        prLink: 'https://github.com/clj-kondo/clj-kondo/pull/2714',
        date: '2026-01-06',
        tier: 'minor',
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
        tier: 'featured',
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
        tier: 'notable',
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
        tier: 'minor',
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
        title: 'Add :blank-lines-separate-alignment? option',
        description:
          'Adds a new configuration option :blank-lines-separate-alignment? that allows column alignment to treat blank lines as group separators. When enabled, alignment groups are separated by blank lines, allowing independent alignment within each group rather than across the entire form. This refactors the column alignment logic to support both the original behavior (aligning across all lines) and the new grouped behavior.',
        impact:
          'Improves readability by visually grouping related items together, allowing independent alignment of related bindings or map entries separately',
        prLink: 'https://github.com/weavejester/cljfmt/pull/381',
        date: '2026-02-12',
        tags: ['formatting', 'alignment', 'new-feature', 'configuration'],
        tier: 'featured',
      },
      {
        title: 'Fix Case-Sensitive Sorting in sort-ns-references',
        description:
          'Fixed the :sort-ns-references? option to perform case-insensitive string sorting, preventing uppercase namespace references from sorting before lowercase ones. Modified the node-sort-string function and added a test case.',
        impact:
          'Improves code formatting consistency by ensuring predictable namespace reference ordering',
        prLink: 'https://github.com/weavejester/cljfmt/pull/389',
        date: '2026-01-20',
        tags: ['bugfix', 'sorting', 'case-insensitive'],
        tier: 'notable',
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
        tier: 'featured',
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
        tier: 'featured',
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
        tier: 'featured',
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
        title: 'Migrate cljfmt 0.16.0',
        description:
          "Major migration of Calva's code formatting infrastructure to cljfmt 0.16.0. Updated cljfmt dependency from 0.13.1 to 0.16.0 and migrated formatter to use cljfmt's native alignment capabilities. Removed 4,600+ lines of legacy pez-cljfmt and pez-rewrite-clj code. Added comprehensive tests for align-associative conversion logic to ensure compatibility with new formatting behavior.",
        impact:
          'Massive code reduction and modernization - cleaner codebase with better maintenance, improved reliability through proven library functionality, and access to two years of upstream cljfmt improvements',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3048',
        date: '2026-02-13',
        tags: [
          'refactoring',
          'formatting',
          'cljfmt',
          'code-cleanup',
          'major-upgrade',
        ],
        tier: 'featured',
      },
      {
        title: 'Add Default Pair Form Support for js-interop Library',
        description:
          'Added comprehensive pair form support for the applied-science/js-interop library, enabling paredit operations (grow selection, drag sexp) for js-interop-specific forms. Introduced vector-binding form support for applied-science.js-interop/let and flat pair form support for applied-science.js-interop/assoc! and applied-science.js-interop/obj. Includes support for aliased forms (e.g., j/let, j/assoc!) with comprehensive test coverage.',
        impact:
          'Enables intuitive structural editing for ClojureScript developers using the popular js-interop library, improving productivity when working with JavaScript interop code',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3045',
        date: '2026-02-11',
        tags: [
          'enhancement',
          'paredit',
          'js-interop',
          'pair-forms',
          'clojurescript',
        ],
        tier: 'minor',
      },
      {
        title: 'Threading Macros Alias Resolution and Promesa Pair Defaults',
        description:
          'Enhanced threading macro detection to support namespace alias resolution, allowing pair forms and threading macros to work correctly when invoked via aliases (e.g., p/-> for promesa.core/->). Added default pair form support for Promesa library forms including promesa.core/plet, promesa.core/loop, promesa.core/doseq, and promesa.core/with-redefs. Added threading macro support for promesa.core/-> and promesa.core/->>.',
        impact:
          'Enables reliable structural editing for aliased threading macros and Promesa async workflows, improving developer experience for async Clojure code',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3032',
        date: '2026-02-11',
        tags: [
          'enhancement',
          'paredit',
          'threading',
          'promesa',
          'alias-resolution',
        ],
        tier: 'minor',
      },
      {
        title: 'Fix Forward Delete for Discard Comment Tokens',
        description:
          'Fixed forward delete operation to delete the entire #_ (discard comment) token in a single keypress when cursor is positioned at the start of the token. Previously, forward delete would only remove the # character, requiring two deletions to fully remove the #_ token.',
        impact:
          'Improves editing efficiency and consistency when working with discard comments',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3043',
        date: '2026-02-11',
        tags: ['bugfix', 'structural-editing', 'discard-comments', 'delete'],
        tier: 'notable',
      },
      {
        title: 'Fix Backspace for Discard Comment Tokens',
        description:
          'Fixed backspace operation to delete the entire #_ (discard comment) token in a single keypress when cursor is positioned immediately after the token. Previously, backspace would jump over the token instead of deleting it, treating it like structural delimiters.',
        impact:
          'Eliminates unexpected jump-over behavior when deleting discard comments',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3042',
        date: '2026-02-11',
        tags: ['bugfix', 'structural-editing', 'discard-comments', 'backspace'],
        tier: 'notable',
      },
      {
        title: 'Fix Jack-in Dependencies Not Finding Latest Versions',
        description:
          'Fixed jack-in dependency version resolution to always refresh from Clojars instead of returning early when dependencies were cached. Removed the early return when all dependencies were cached, ensuring users always see the latest available versions (e.g., nrepl 1.5.2 instead of stale 1.5.1).',
        impact:
          'Ensures developers always have access to latest library versions during REPL startup',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3039',
        date: '2026-02-11',
        tags: ['bugfix', 'jack-in', 'dependencies', 'clojars'],
        tier: 'notable',
      },
      {
        title: 'Fix Deletion After Ctrl+Backspace in Line Comments',
        description:
          'Fixed issue where pressing Ctrl+Backspace inside line comments would prevent subsequent deletions from working correctly. Modified the backspace handler to avoid processing Ctrl+Backspace within line comment contexts.',
        impact:
          'Restores normal deletion behavior after using Ctrl+Backspace in comments',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3038',
        date: '2026-02-11',
        tags: ['bugfix', 'comments', 'keyboard-shortcuts', 'deletion'],
        tier: 'notable',
      },
      {
        title: 'Fix Text Garbling When Hitting Key Before Indentation',
        description:
          'Fixed a race condition where pressing keys before indentation was applied would cause text to be garbled and cursor position to jump. Introduced calculateIndentEdit() function that returns TextEdit objects instead of performing edits directly, reducing timing conflicts. Increased debounce delay from 250ms to 400ms to give users more time between typing and formatting. Refactored FormatOnTypeEditProvider to use the new indent calculation method while maintaining backward compatibility with the old indent engine.',
        impact:
          'Eliminates disruptive text garbling and cursor jumping during fast typing, significantly improving editor experience during indentation',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3034',
        date: '2026-02-06',
        tags: [
          'bugfix',
          'indentation',
          'formatting',
          'race-condition',
          'cursor-position',
        ],
        tier: 'featured',
      },
      {
        title: 'User Customizable Pair Forms and Threading Macros',
        description:
          'Introduced comprehensive configuration system for custom pair forms and threading macros, now configurable via VS Code Settings menu. Users can define custom pair forms and threading macros through the VS Code UI settings panel, JSON settings, or config.edn file. Implemented createPareditConfig function that merges custom and default configurations, enabling complete paredit customization.',
        impact:
          'Provides users with powerful and accessible customization options for pair-aware editing operations through the familiar VS Code Settings UI, greatly enhancing flexibility and enabling library-specific workflows',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3015',
        date: '2026-02-04',
        tags: [
          'enhancement',
          'paredit',
          'configuration',
          'customization',
          'settings-ui',
        ],
        tier: 'featured',
      },
      {
        title: 'Refactor Structural Prefix Deletion for Consistency',
        description:
          "Unified the handling of structural prefix deletion (for both ' and #) to be consistent between backward and forward deletion operations. Refactored backspace and deleteForward functions into smaller, more maintainable functions for better code clarity.",
        impact:
          'Eliminates inconsistencies in structural prefix deletion behavior, providing predictable and intuitive editing experience',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3022',
        date: '2026-02-04',
        tags: ['refactoring', 'paredit', 'structural-editing', 'consistency'],
        tier: 'minor',
      },
      {
        title: 'Fix Quote Prefix Deletion After Quoted Lists',
        description:
          "Fixed structural backspace and deleteForward operations to correctly handle deletion of quote prefixes positioned right after quoted forms. Issue manifested when attempting operations like '()|: now the quote can be deleted properly. Added comprehensive unit tests for quoted lists, nested quoted lists, and quoted vectors.",
        impact:
          'Improves structural editing experience by enabling proper quote prefix deletion in edge cases with quoted forms',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3023',
        date: '2026-02-04',
        tags: ['bugfix', 'paredit', 'structural-editing', 'quotes'],
        tier: 'minor',
      },
      {
        title: 'Fix Slurping with Ignored/Commented Expressions',
        description:
          'Fixed slurp forward and backward operations to properly handle s-expressions with #_ (ignore marker) comments. Modified forwardSexp and backwardSexp in token-cursor.ts to treat #_(form) as a unified s-expression unit rather than separate tokens, preventing errors during slurp operations.',
        impact:
          'Enables reliable slurping operations when working with commented-out code, improving workflow for refactoring and structural editing',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3024',
        date: '2026-02-04',
        tags: ['bugfix', 'paredit', 'slurp', 'ignore-comments'],
        tier: 'featured',
      },
      {
        title: 'Fix Slurp Backward with Ignored/Commented Expressions',
        description:
          "Fixed slurp backward operation to properly handle cursor positioning when encountering #_ (ignore marker) comments. After calling backwardSexp to find the previous form, the cursor is now correctly checked if it's preceded by an #_ ignore marker, enabling reliable backward slurping with commented code.",
        impact:
          'Ensures backward slurping works correctly with ignored expressions, completing the fix for structural editing with #_ comments',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3026',
        date: '2026-02-04',
        tags: ['bugfix', 'paredit', 'slurp', 'ignore-comments'],
        tier: 'minor',
      },
      {
        title: 'Fix Pair Detection in Regular Vectors Inside Let Body',
        description:
          'Resolved issue where regular vectors in let body contexts were incorrectly treated as pair forms during grow selection and drag sexp operations. Enhanced vector detection logic to distinguish between binding vectors and regular vectors by directly comparing opening positions, ensuring accurate pair form behavior.',
        impact:
          'Fixes grow selection and drag sexp operations for vectors within let bodies, eliminating incorrect pair form treatment',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3028',
        date: '2026-02-04',
        tags: ['bugfix', 'paredit', 'drag-sexp', 'vectors'],
        tier: 'notable',
      },
      {
        title: 'Add Pair Selection and Drag Support for Threaded cond->',
        description:
          'Enhanced pair selection and drag sexp operations to correctly recognize and handle test/expression pairs within cond-> and cond->> threading macros. Added comprehensive test coverage for nested threading macros (e.g., cond-> with assoc pairs) to ensure proper expansion behavior.',
        impact:
          'Enables intuitive pair selection and dragging for threaded conditional forms at multiple nesting levels, improving code manipulation workflows',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3019',
        date: '2026-02-02',
        tags: ['enhancement', 'paredit', 'threading', 'pair-forms'],
        tier: 'notable',
      },
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
        tier: 'minor',
      },
      {
        title: 'Add Drag Sexp Tests for Form Pairs and Triples',
        description:
          'Comprehensive test coverage for drag sexp functionality across different form types including cond, case, condp, and :let bindings. Tests ensure proper movement of pairs and triples within conditional and binding forms.',
        impact:
          'Ensures reliability of drag sexp operations for complex form structures',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3004',
        date: '2026-01-30',
        tags: ['testing', 'paredit', 'drag-sexp'],
        tier: 'minor',
      },
      {
        title: 'Add Pair/Triple Selection and Dragging Support for condp',
        description:
          'Enhanced grow selection and drag sexp to recognize test/result pairs and test/:>>/function triples within condp expressions. Properly handles default values (unpaired elements at the end).',
        impact:
          'Improves code selection and manipulation experience for condp forms, enabling intuitive pair and triple selection and movement',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/2998',
        date: '2026-01-30',
        tags: [
          'enhancement',
          'paredit',
          'selection',
          'drag-sexp',
          'conditionals',
        ],
        tier: 'featured',
      },
      {
        title: 'Add Selection and Dragging Support for case Form Pairs',
        description:
          'Enhanced grow selection and drag sexp to handle value/result pairs in case forms, similar to existing support for cond and binding forms like let.',
        impact:
          'Expands selections correctly and enables proper pair movement when working with conditional expressions in case statements',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/2997',
        date: '2026-01-30',
        tags: [
          'enhancement',
          'paredit',
          'selection',
          'drag-sexp',
          'conditionals',
        ],
        tier: 'notable',
      },
      {
        title: 'Add Selection and Dragging Support for :let Binding Pairs',
        description:
          'Enhanced grow selection and drag sexp to recognize :let binding pairs within for loops, doseq, and other binding forms. Updated logic to detect :let vectors and expand through binding pairs before selecting the entire vector.',
        impact:
          'Improves code selection and manipulation experience for :let bindings, aligning behavior with standard let functionality',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/2989',
        date: '2026-01-30',
        tags: ['enhancement', 'paredit', 'selection', 'drag-sexp', 'bindings'],
        tier: 'notable',
      },
      {
        title: 'Add Selection and Dragging Support for cond Form Pairs',
        description:
          'Implemented pair selection and dragging functionality for cond forms, enabling users to select and move test/expression pairs within conditional forms. Introduced conditionalForms constant and dynamic offset calculation for maintainable architecture.',
        impact:
          'Accelerates conditional logic navigation and editing, maintaining consistency with existing pair-selection and drag-sexp features',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/2992',
        date: '2026-01-30',
        tags: [
          'enhancement',
          'paredit',
          'selection',
          'drag-sexp',
          'conditionals',
        ],
        tier: 'notable',
      },
      {
        title:
          'Add Selection and Dragging Support for cond-> and cond->> Form Pairs',
        description:
          'Extended pair selection and dragging functionality to cond-> and cond->> threading forms, allowing intelligent selection and movement of test/expr pairs in threaded conditionals.',
        impact:
          'Streamlines code refactoring workflows for threaded conditional forms',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/2996',
        date: '2026-01-30',
        tags: ['enhancement', 'paredit', 'selection', 'drag-sexp', 'threading'],
        tier: 'notable',
      },
      {
        title: 'Fix: Slurp Forward Empty Form',
        description:
          'Fixed Slurp Forward command adding an unwanted leading space when slurping into empty or whitespace-only forms. The fix detects when the target form contains no actual content (only whitespace between open and close brackets, or empty strings) and omits the leading space in that case.',
        impact:
          'Eliminates unwanted spaces in empty forms during slurp operations, improving structural editing precision',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3005',
        date: '2026-02-02',
        tags: ['bugfix', 'paredit', 'slurp', 'structural-editing'],
        tier: 'minor',
      },
      {
        title: 'Fix: Slurp Backward Empty Form',
        description:
          'Fixed Slurp Backward command adding unwanted trailing spaces when slurping into empty or whitespace-only forms. The fix detects when the target form contains no actual content and omits the trailing space in that case, bringing consistency with the forward slurp fix.',
        impact:
          'Ensures consistent slurp behavior for both forward and backward operations on empty forms',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3006',
        date: '2026-02-02',
        tags: ['bugfix', 'paredit', 'slurp', 'structural-editing'],
        tier: 'minor',
      },
      {
        title: 'Add Pair-Aware Support for assoc Form',
        description:
          'Added support for treating assoc form pairs in paredit operations (grow selection and drag sexp). The assoc form has the structure (assoc map key value key value ...) where key-value pairs start after the map argument (offset 2). This brings feature parity with other pair-aware forms like cond, case, and condp.',
        impact:
          'Enables intuitive key-value pair manipulation in assoc forms, improving code editing efficiency',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3009',
        date: '2026-02-02',
        tags: [
          'enhancement',
          'paredit',
          'assoc',
          'pair-forms',
          'structural-editing',
        ],
        tier: 'notable',
      },
      {
        title: 'Add Threading Macro Support for Pair Forms',
        description:
          'Enhanced pair-aware forms (flatPairForms) to work correctly inside -> threading macros. The fix reduces the offset by 1 when inside a threading context to maintain proper pair calculation without breaking existing functionality.',
        impact:
          'Enables correct pair selection and dragging for forms like assoc, cond, and case when used inside threading macros',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3011',
        date: '2026-02-02',
        tags: [
          'enhancement',
          'paredit',
          'threading',
          'pair-forms',
          'structural-editing',
        ],
        tier: 'notable',
      },
      {
        title: 'Consolidate and Generalize Pair Form Handling in Paredit',
        description:
          'Unified the handling of pair forms (like let bindings, cond pairs, and keyword-based modifiers) within the Paredit logic. Introduced PairFormConfig supporting VectorBindingForm, KeywordPairForm, and FlatPairForm styles. Enhanced parent validation and generalized triple handling (like test :>> expression in condp). Replaced hardcoded bindingForms and conditionalForms arrays with defaultPairForms for improved extensibility.',
        impact:
          'Provides the internal infrastructure for making pair form handling fully configurable, enabling easier addition of similar patterns in the future and improving code maintainability through unified configuration-driven approach',
        prLink: 'https://github.com/BetterThanTomorrow/calva/pull/3012',
        date: '2026-02-01',
        tags: [
          'refactoring',
          'paredit',
          'pair-forms',
          'configuration',
          'infrastructure',
        ],
        tier: 'notable',
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
        tier: 'notable',
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
        tier: 'notable',
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
        tier: 'minor',
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

  const featured = projects.reduce(
    (sum, project) =>
      sum + project.contributions.filter((c) => c.tier === 'featured').length,
    0,
  );

  return {
    totalProjects,
    totalContributions,
    technologies,
    featured,
  };
}

// Helper to get contributions by tier
export function getContributionsByTier(projectContributions: Contribution[]) {
  return {
    featured: projectContributions.filter((c) => c.tier === 'featured'),
    notable: projectContributions.filter((c) => c.tier === 'notable'),
    minor: projectContributions.filter((c) => c.tier === 'minor' || !c.tier),
  };
}

/*
 * Sort contributions by tier (featured > notable > minor) and then by date (newest first)
 * This ensures that featured contributions are always shown at the top, followed by notable and minor contributions, with the most recent contributions appearing first within each tier.
 */
export function sortContributionsByDate(contributions: Contribution[]) {
  const tierOrder = { featured: 1, notable: 2, minor: 3 };
  return contributions.sort((a, b) => {
    const tierComparison =
      (tierOrder[a.tier || 'minor'] || 3) - (tierOrder[b.tier || 'minor'] || 3);
    if (tierComparison !== 0) {
      return tierComparison; // Sort by tier first
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime(); // Then sort by date
  });
}
