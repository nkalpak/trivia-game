import React, { useState } from 'react';
import { createGenericContext, useQueryParams } from '../../utils';
import { GameState, QuestionDifficulty } from '../../global/types';
import { Loader } from '../loader/loader';
import { ShouldRender } from '../should-render/should-render';
import { useQuestions } from './use-game';
import { Questions } from './components/questions/questions';
import { GameOver } from './components/game-over/game-over';
import { GameContextType } from './game-types';

export const [useGameContext, GameContextProvider] = createGenericContext<GameContextType>();

export const Game = () => {
  const queryParams = useQueryParams();
  const { data: questions, isLoading } = useQuestions(queryParams.get('difficulty') as QuestionDifficulty);

  const [score, setScore] = useState(0);
  const [state, setState] = useState<GameState>('playing');

  const value = {
    score,
    state,
    setScore,
    setState,
  };

  return (
    <GameContextProvider value={value}>
      <ShouldRender condition={isLoading}>
        <Loader text="Getting your questions..." />
      </ShouldRender>

      <ShouldRender condition={state === 'lose' || state === 'win'}>
        <GameOver />
      </ShouldRender>

      <ShouldRender condition={state === 'playing'}>
        <Questions questions={questions} />
      </ShouldRender>
    </GameContextProvider>
  );
};
