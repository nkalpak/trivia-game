import styled from 'styled-components';

export const DesktopCard = styled.div`
  @media(min-width: 1024px) {
    background: rgba(255, 255, 255, 0.1);
    padding: 100px;
    border-radius: 10px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

export const WelcomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DifficultyTextStyled = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  width: 80%;
  padding: 8px;
  text-align: center;
`;

export const ButtonGroupStyled = styled.div`
  & :not(:last-child) {
    margin-bottom: 9px;
  }
`;
