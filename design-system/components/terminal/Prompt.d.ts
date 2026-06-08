import * as React from 'react';

/**
 * A terminal command line — `$ whoami_` — the brand's signature flourish.
 * Inline by default; `boxed` wraps it in a sunken chip.
 */
export interface PromptProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The prompt sigil. @default "$" */
  sigil?: React.ReactNode;
  /** Append a blinking teal cursor. */
  cursor?: boolean;
  /** Render inside a bordered chip. */
  boxed?: boolean;
  /** The command text. */
  children?: React.ReactNode;
}

export function Prompt(props: PromptProps): JSX.Element;
