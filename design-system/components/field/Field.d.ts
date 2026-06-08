import * as React from 'react';

/**
 * Label + control + hint/error wrapper. The label is a mono uppercase eyebrow
 * led by a teal `>` sigil; required fields get a shell asterisk.
 */
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The field label text. */
  label?: React.ReactNode;
  /** `htmlFor` linking label to the control's id. */
  htmlFor?: string;
  /** Leading teal sigil. @default ">" */
  sigil?: React.ReactNode;
  required?: boolean;
  /** Helper text shown below when there is no error. */
  hint?: React.ReactNode;
  /** Error message; replaces hint and turns clay. */
  error?: React.ReactNode;
  /** The control element (Input / Textarea / Select). */
  children?: React.ReactNode;
}

export function Field(props: FieldProps): JSX.Element;
