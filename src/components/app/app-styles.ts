import styled from 'styled-components';

export const ContainerStyled = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;

  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, rgba(156,114,255,1) 0%, rgba(134,91,240,1) 100%);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface HeadingStyledProps {
  size?: number;
}

export const HeadingStyled = styled.h1<HeadingStyledProps>`
  color: white;
  text-shadow: 0 4px 15px black;
  font-size: ${props => `${props.size}px`};
`;
