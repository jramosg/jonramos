import * as React from 'react';

/**
 * A portrait in the brand's registration frame — corner ticks and a mono
 * filename caption, echoing the hero portrait. Falls back to teal initials
 * when no image is provided.
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLElement> {
  /** Image source. Omit to render the initials fallback. */
  src?: string;
  alt?: string;
  /** Initials shown when there is no image, e.g. "JR". */
  initials?: string;
  /** Pixel size of the image box. @default 96 */
  size?: number;
  /** Circular crop instead of squared. */
  round?: boolean;
  /** Draw the four corner registration ticks. */
  frame?: boolean;
  /** Mono caption below (use a node with <b> for a teal segment). */
  label?: React.ReactNode;
}

export function Avatar(props: AvatarProps): JSX.Element;
