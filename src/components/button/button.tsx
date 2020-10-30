import React from 'react';
import { ButtonStyled } from './button-styles';
import { ButtonProps } from './button-types';

export const Button: React.FC<ButtonProps> = ({ children, iconEnd, iconStart, kind = 'primary' }) => (
  <ButtonStyled kind={kind}>
    <>
      {iconStart}
      {children}
      {iconEnd}
    </>
  </ButtonStyled>
);
