import styled from 'styled-components';
import { ButtonKind } from './button-types';

interface ButtonStyledProps {
  kind: ButtonKind;
}

const getBackground = (props: ButtonStyledProps) => {
  if (props.kind === 'primary') return '#FF87B5';
  return 'rgba(0, 0, 0, 0.1)';
};

const getBoxShadow = (props: ButtonStyledProps) => {
  if (props.kind === 'primary') return '0 10px 4px 0 #CB5A85';
  return 'none';
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  min-width: 300px;
  border-radius: 999px;
  text-transform: initial;
  
  font-size: 25px;
  font-family: 'Monserrat', sans-serif;
  font-weight: 900;
  color: white;
  
  padding: 20px;
  outline: none;
  
  border: none;
  background: ${getBackground};
  box-shadow: ${getBoxShadow};
`;
