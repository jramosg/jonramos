import * as React from 'react';

/**
 * A code/REPL window — optional title bar with traffic dots and a filename,
 * optional line-number gutter. Pass a code string as children (colour it with
 * the --code-* tokens via nested spans if you want syntax highlighting).
 */
export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Filename / label in the title bar. Use <b> via a node for a teal segment. */
  title?: React.ReactNode;
  /** Show the three traffic-light dots. */
  dots?: boolean;
  /** Render a left line-number gutter (requires string children). */
  lineNumbers?: boolean;
  /** The code, ideally a string for line numbering. */
  children?: React.ReactNode;
}

export function CodeBlock(props: CodeBlockProps): JSX.Element;
