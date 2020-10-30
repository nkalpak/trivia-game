import styled from 'styled-components';

export const LoaderOuterStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

export const LoaderInnerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoaderTextStyled = styled.p`
  color: white;
  font-weight: normal;
  margin-top: 8px;
`;
