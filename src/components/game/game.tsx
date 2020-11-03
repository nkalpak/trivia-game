import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQueryCache } from 'react-query';
import { createGenericContext } from '../../utils';
import { ShouldRender } from '../../packages/should-render/should-render';
import { DesktopCard, Routing } from '../../global';
import { Questions } from './components/questions/questions';
import { GameOver } from './components/game-over/game-over';
import { GameState, GameContextInterface } from './game-types';

export const [useGameContext, GameContextProvider] = createGenericContext<GameContextInterface>();

export const Game = () => {
  const [score, setScore] = useState(0);
  const [state, setState] = useState<GameState>('playing');

  const history = useHistory();
  const queryCache = useQueryCache();

  const value = {
    score,
    state,
    setScore,
    setState,
    restartGame: () => {
      queryCache.removeQueries('questions');
      history.replace(Routing.Welcome);
    },
  };

  return (
    <DesktopCard>
      <GameContextProvider value={value}>
        <ShouldRender condition={state === 'lose' || state === 'win'}>
          <GameOver />
        </ShouldRender>

        <ShouldRender condition={state === 'playing'}>
          <Questions />
        </ShouldRender>
      </GameContextProvider>
    </DesktopCard>
  );
};
