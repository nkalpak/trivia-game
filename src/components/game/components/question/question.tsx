import React from 'react';
import parse from 'html-react-parser';
import { HeadingStyled } from '../../../app/app-styles';
import { Button } from '../../../button/button';
import { AnswersContainerStyled, QuestionContainerStyled, QuestionStyled } from './question-styles';
import { mapAnswers } from './question-utils';
import { AnswerSelectedFunction, QuestionType } from '.';

interface QuestionProps {
  question: QuestionType;
  onAnswer: AnswerSelectedFunction
}

export const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => (
  <QuestionStyled>
    <QuestionContainerStyled>
      <HeadingStyled size={22}>{parse(question.question)}</HeadingStyled>
    </QuestionContainerStyled>

    <AnswersContainerStyled>
      {mapAnswers(question).map(a => (
        <Button
          key={a.answer + a.correct}
          onClick={() => onAnswer(a)}
          kind="secondary"
        >{parse(a.answer)}
        </Button>
      ))}
    </AnswersContainerStyled>
  </QuestionStyled>
);
