import * as React from 'react';

/**
 * The primary action element. Mono-set, crisp corners, calm expo motion.
 * Five variants: a teal `primary`, a hairline `secondary`, a quiet `ghost`,
 * a `blush` for special CTAs, and a `danger` (clay).
 *
 * @startingPoint section="Core" subtitle="Teal / hairline / ghost / shell actions" viewport="700x160"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'shell' | 'danger';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Optional terminal sigil rendered before the label, e.g. "$" or "›". */
  sigil?: React.ReactNode;
  /** Leading icon node (an SVG element). */
  icon?: React.ReactNode;
  /** Trailing icon node. */
  iconRight?: React.ReactNode;
  /** Renders as an anchor when set. */
  href?: string;
  /** Disabled state. */
  disabled?: boolean;
  /** Native button type when not a link. */
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
