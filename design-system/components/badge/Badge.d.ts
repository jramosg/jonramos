import * as React from 'react';

/**
 * A small status pill — "Available", "Present", "Open source".
 * Carries an optional (optionally pulsing) status dot.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Colour tone. @default "jade" */
  tone?: 'teal' | 'shell' | 'clay' | 'neutral';
  /** Show a leading status dot. */
  dot?: boolean;
  /** Animate the dot (use sparingly — "live now"). */
  pulse?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
