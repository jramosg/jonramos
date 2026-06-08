import * as React from 'react';

/**
 * A mono technology chip — Clojure, Datomic, Astro. Reads as a code token.
 * Becomes a link when `href` is set.
 */
export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  /** Teal-tinted emphasis variant. */
  accent?: boolean;
  /** A small leading glyph (e.g. "#" or ":"), moss-coloured. */
  lead?: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
