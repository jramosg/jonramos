import * as React from 'react';

/**
 * A square, icon-only button — for toolbars, social links, theme toggles.
 * Always pass `label` for accessibility (used as aria-label + title).
 */
export interface IconButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Accessible name. Required. */
  label: string;
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** `ghost` (hairline) or `solid` (raised surface). @default "ghost" */
  variant?: 'ghost' | 'solid';
  href?: string;
  disabled?: boolean;
  className?: string;
  /** The icon node (an SVG). */
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
