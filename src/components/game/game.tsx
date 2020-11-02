import React, { useState } from 'react';
import { createGenericContext, useQueryParams } from '../../utils';
import { ShouldRender } from '../../packages/should-render/should-render';
import { DesktopCard, Routing } from '../../global';
import { QuestionDifficulty } from './components/question';
import { useQuestions } from './use-game';
import { Questions } from './components/questions/questions';
import { GameOver } from './components/game-over/game-over';
import { GameState, GameContextInterface } from './game-types';

export const [useGameContext, GameContextProvider] = createGenericContext<GameContextInterface>();

export const Game = () => {
  const queryParams = useQueryParams();
  const { questions } = useQuestions(queryParams.get(Routing.Play.Params.difficulty) as QuestionDifficulty);

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
        <ShouldRender condition={state === 'lose' || state === 'win'}>
          <GameOver />
        </ShouldRender>

        <ShouldRender condition={state === 'playing'}>
          <Questions questions={questions} />
        </ShouldRender>
      </GameContextProvider>
    </DesktopCard>
  );
};
