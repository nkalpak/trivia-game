import styled from 'styled-components';

export const ContainerStyled = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;

  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #9C72FF 100%, #865BF0 0%);
  
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
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  font-size: ${props => `${props.size}px`};
`;
