import styled from 'styled-components';
import { Mixin } from '../../global';

interface SkeletonBoxStyledProps {
  width?: number | string;
  height?: number | string;
}

export const SkeletonBoxStyled = styled.div<SkeletonBoxStyledProps>`
  overflow: hidden;
  position: relative;
  height: ${(props: SkeletonBoxStyledProps) => props.height ?? '100%'};
  width: ${(props: SkeletonBoxStyledProps) => props.width ?? '100%'};
  margin-bottom: 8px;
  font-size: 24px;
  
  &::before {
    width: 100%;
    height: 100%;
    ${Mixin.skeletonBeforeStyles}
  }
  
  ${Mixin.skeletonKeyframes}
`;
