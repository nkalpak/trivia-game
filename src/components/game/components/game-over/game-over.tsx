import React from 'react';
import { GameState } from '../../../../global/types';
import { Limelight } from '../../../limelight/limelight';
import { HeadingStyled } from '../../../app/app-styles';
import { Button } from '../../../button/button';
import { Repeat } from '../../../../assets/icons/repeat/repeat';

interface GameOverProps {
  state: GameState;
  score: number;
}

export const GameOver: React.FC<GameOverProps> = ({ state, score }) => {
  const gameOverText = (s: GameState) => {
    if (s === 'win') return 'You won!';
    return 'You lost. Try again?';
  };

  return (
    <div>
      <HeadingStyled>{gameOverText(state)}</HeadingStyled>
      <Limelight><HeadingStyled size={150}>{score}</HeadingStyled></Limelight>
      <Button iconEnd={<Repeat />}>Again</Button>
    </div>
  );
};
