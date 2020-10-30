import React from 'react';
import { useQueryParams } from '../../utils';
import { QuestionDifficulty } from '../../global/types';
import { Loader } from '../loader/loader';
import { useQuestions } from './use-game';
import { Questions } from './components/questions/questions';

export const Game = () => {
  const queryParams = useQueryParams();
  const { data: questions, isLoading } = useQuestions(queryParams.get('difficulty') as QuestionDifficulty);

  return (
    <div>
      {isLoading && <Loader text="Getting your questions..." />}
      <Questions questions={questions} />
    </div>
  );
};
