import * as React from 'react';

/** A mono text input on a sunken surface, teal focus ring. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** A small teal prefix glyph inside the field (e.g. "$", "@", "›"). */
  prefix?: React.ReactNode;
  /** Marks the field invalid (clay border). */
  invalid?: boolean;
}

export function Input(props: InputProps): JSX.Element;
