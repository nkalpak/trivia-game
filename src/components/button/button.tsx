import React from 'react';
import { ButtonStyled, IconLeftStyled, IconRightStyled } from './button-styles';
import { ButtonProps } from './button-types';

export const Button: React.FC<ButtonProps> = ({
  children,
  iconEnd,
  iconStart,
  kind = 'primary',
  onClick,
}) => (
  <ButtonStyled
    kind={kind}
    onClick={onClick}
  >
    <>
      {iconStart && <IconLeftStyled>{iconStart}</IconLeftStyled>}
      {children}
      {iconEnd && <IconRightStyled>{iconEnd}</IconRightStyled>}
    </>
  </ButtonStyled>
);
