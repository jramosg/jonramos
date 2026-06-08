import * as React from 'react';

/** A multiline mono input, vertically resizable, teal focus ring. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Marks the field invalid (clay border). */
  invalid?: boolean;
}

export function Textarea(props: TextareaProps): JSX.Element;
