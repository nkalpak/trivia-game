import React from 'react';
import { Limelight } from '../../../../packages/limelight/limelight';
import { HeadingStyled } from '../../../app/app-styles';
import { Button } from '../../../button/button';
import { Repeat } from '../../../../assets/icons/repeat/repeat';
import { useGameContext } from '../../game';
import { GameOverStyled, LimelightWrapperStyled } from './game-over-styles';

export const GameOver = () => {
  const { score, state, restartGame } = useGameContext();

  return (
    <GameOverStyled>
      <HeadingStyled size={25}>
        {state === 'win' ? 'You won!' : 'You lost. Try again?'}
      </HeadingStyled>

      <LimelightWrapperStyled>
        <Limelight>
          <HeadingStyled size={150}>{score}</HeadingStyled>
        </Limelight>
      </LimelightWrapperStyled>

      <Button
        onClick={restartGame}
        iconEnd={<Repeat />}
      >Play Again
      </Button>
    </GameOverStyled>
  );
};
