import * as React from 'react';

/**
 * The system's workhorse surface — a raised, hairline-bordered panel for
 * projects, experience entries, contact methods. Optional editorial chrome:
 * a `;;` eyebrow, a numeric index, corner ticks, a featured accent rule,
 * and a hover-reveal arrow when it links somewhere.
 *
 * @startingPoint section="Core" subtitle="Editorial project / content card" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Serif title (with optional hover arrow when linked). */
  title?: React.ReactNode;
  /** Mono eyebrow label, auto-prefixed with `;;`. */
  eyebrow?: React.ReactNode;
  /** Numeric index, e.g. "01", shown top-right. */
  index?: React.ReactNode;
  /** Node rendered at top-right (e.g. a Badge or IconButton). */
  action?: React.ReactNode;
  /** Footer row — typically a set of Tags. */
  footer?: React.ReactNode;
  /** Link target; turns the card into an anchor and enables hover lift. */
  href?: string;
  /** Adds a teal top rule for emphasis. */
  featured?: boolean;
  /** Force interactive hover lift independent of href. */
  interactive?: boolean;
  /** Draw corner registration ticks. */
  frame?: boolean;
  /** Force/hide the title arrow (defaults to on when href set). */
  showArrow?: boolean;
  /** Card body content. */
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
