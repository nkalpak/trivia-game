import styled, { css } from 'styled-components';

export const Breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export const Mixin = {
  skeletonBeforeStyles: css`
    content: '';
    display: block;
    position: absolute;
    background: linear-gradient(to right, transparent 0%, #a682ff 50%, transparent 100%);
    animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
    
    @media(min-width: ${Breakpoints.lg}) {
      background: linear-gradient(to right, transparent 0%, #a672ff 50%, transparent 100%);
    }
  `,
  skeletonKeyframes: css`
    @keyframes load {
      from {
        left: -150px;
      } to {
        left: 100%;
      }
    }
  `,
};

export const DesktopCard = styled.div`
  @media(min-width: ${Breakpoints.lg}) {
    background: rgba(255, 255, 255, 0.1);
    padding: 100px;
    border-radius: 10px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;
