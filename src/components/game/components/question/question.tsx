import React from 'react';
import parse from 'html-react-parser';
import { HeadingStyled } from '../../../app/app-styles';
import { Button } from '../../../button/button';
import { ButtonSkeletons } from '../../../button/components/button-skeletons';
import { SkeletonBox } from '../../../../packages/skeleton-box';
import { AnswersContainerStyled, QuestionContainerStyled, QuestionStyled } from './question-styles';
import { mapAnswers } from './question-utils';
import { AnswerSelectedFunction, QuestionType } from '.';

interface QuestionProps {
  question?: QuestionType;
  onAnswer: AnswerSelectedFunction;
  loading?: boolean;
}

export const Question: React.FC<QuestionProps> = ({ question, onAnswer, loading }) => (
  <QuestionStyled>
    <QuestionContainerStyled>
      {(question && !loading) ? (
        <HeadingStyled size={22}>{parse(question.question)}</HeadingStyled>
      ) : <SkeletonBox lines={3} />}
    </QuestionContainerStyled>

    <AnswersContainerStyled>
      {(question && !loading) ? (
        mapAnswers(question).map(a => (
          <Button
            key={a.answer + a.correct}
            onClick={() => onAnswer(a)}
            kind="secondary"
          >{parse(a.answer)}
          </Button>
        ))
      ) : (
        <ButtonSkeletons count={4} />
      )}
    </AnswersContainerStyled>
  </QuestionStyled>
);
