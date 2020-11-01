import React from 'react';
import parse from 'html-react-parser';
import { useIsFetching } from 'react-query';
import { HeadingStyled } from '../../../app/app-styles';
import { Button } from '../../../button/button';
import { ButtonSkeletons } from '../../../button/components/button-skeletons';
import { SkeletonBox } from '../../../../packages/skeleton-box';
import { AnswersContainerStyled, QuestionContainerStyled, QuestionStyled } from './question-styles';
import { mapAnswers } from './question-utils';
import { AnswerSelectedFunction, QuestionType } from '.';

interface QuestionProps {
  question?: QuestionType;
  onAnswer: AnswerSelectedFunction
}

export const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const isFetching = useIsFetching();

  return (
    <QuestionStyled>
      <QuestionContainerStyled>
        {(question && !isFetching) ? (
          <HeadingStyled size={22}>{parse(question.question)}</HeadingStyled>
        ) : <SkeletonBox lines={3} />}
      </QuestionContainerStyled>

      <AnswersContainerStyled>
        {(question && !isFetching) ? (
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
};
