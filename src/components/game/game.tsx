import React, { useState } from 'react';
import { createGenericContext, useQueryParams } from '../../utils';
import { GameState, QuestionDifficulty } from '../../global';
import { Loader } from '../../packages/loader/loader';
import { ShouldRender } from '../../packages/should-render/should-render';
import { DesktopCard } from '../welcome/welcome-styles';
import { useQuestions } from './use-game';
import { Questions } from './components/questions/questions';
import { GameOver } from './components/game-over/game-over';
import { GameContextType } from './game-types';

export const [useGameContext, GameContextProvider] = createGenericContext<GameContextType>();

export const Game = () => {
  const queryParams = useQueryParams();
  const { data: questions, isFetching } = useQuestions(queryParams.get('difficulty') as QuestionDifficulty);

  const [score, setScore] = useState(0);
  const [state, setState] = useState<GameState>('playing');

  const value = {
    score,
    state,
    setScore,
    setState,
  };

  return (
    <DesktopCard>
      <GameContextProvider value={value}>
        {isFetching ? (
          <Loader text="Getting your questions..." />
        ) : (
          <>
            <ShouldRender condition={state === 'lose' || state === 'win'}>
              <GameOver />
            </ShouldRender>

            <ShouldRender condition={!isFetching && state === 'playing'}>
              <Questions questions={questions} />
            </ShouldRender>
          </>
        )}
      </GameContextProvider>
    </DesktopCard>
  );
};
