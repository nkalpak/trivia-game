import styled from 'styled-components';

export const QuestionStyled = styled.div`
  width: 350px;
  text-align: center;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuestionContainerStyled = styled.div`
  min-height: 100px;
  height: 100%;
  padding: 16px;
`;

export const AnswersContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & :not(:last-child) {
    margin-bottom: 9px;
  }
`;
