import styled, { StyledComponent } from 'styled-components';
import { ButtonStyled } from '../../button-styles';
import { Mixin } from '../../../../global';

export const ButtonSkeletonStyled = styled(ButtonStyled)`
  overflow: hidden;
  cursor: default;
  
  &::before {
    left: -300px;
    top: 0;
    height: 100%;
    width: 300px;
    ${Mixin.skeletonBeforeStyles}
  }
  
  ${Mixin.skeletonKeyframes}
` as StyledComponent<'button', any>;
