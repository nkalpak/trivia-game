import styled from 'styled-components';

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
