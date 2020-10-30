import React from 'react';
import { AnswerType, QuestionType } from '../../../../global/types';
import { HeadingStyled } from '../../../app/app-styles';
import { Button } from '../../../button/button';
import { AnswersContainerStyled, QuestionContainerStyled, QuestionStyled } from './question-styles';
import { mapAnswers, replaceHtmlQuoteAttribute } from './utils';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (a: AnswerType) => void;
}

export const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => (
  <QuestionStyled>
    <QuestionContainerStyled>
      <HeadingStyled size={22}>{replaceHtmlQuoteAttribute(question.question)}</HeadingStyled>
    </QuestionContainerStyled>

    <AnswersContainerStyled>
      {mapAnswers(question).map(a => (
        <Button
          key={a.answer + a.correct}
          onClick={() => onAnswer(a)}
          kind="secondary"
        >{a.answer}
        </Button>
      ))}
    </AnswersContainerStyled>
  </QuestionStyled>
);
