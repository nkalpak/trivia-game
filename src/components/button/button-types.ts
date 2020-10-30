import React from 'react';

export type ButtonKind = 'primary' | 'secondary'

export interface ButtonProps {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  kind?: ButtonKind;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
}
