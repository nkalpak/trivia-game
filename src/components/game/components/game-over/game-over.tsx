import React from 'react';
import { useHistory } from 'react-router-dom';
import { GameState } from '../../../../global/types';
import { Limelight } from '../../../limelight/limelight';
import { HeadingStyled } from '../../../app/app-styles';
import { Button } from '../../../button/button';
import { Repeat } from '../../../../assets/icons/repeat/repeat';
import { useGameContext } from '../../game';
import { GameOverStyled, LimelightWrapperStyled } from './game-over-styled';

export const GameOver = () => {
  const { score, state } = useGameContext();
  const history = useHistory();

  const gameOverText = (s: GameState) => {
    if (s === 'win') return 'You won!';
    return 'You lost. Try again?';
  };

  return (
    <GameOverStyled>
      <HeadingStyled size={25}>{gameOverText(state)}</HeadingStyled>

      <LimelightWrapperStyled>
        <Limelight>
          <HeadingStyled size={150}>{score}</HeadingStyled>
        </Limelight>
      </LimelightWrapperStyled>

      <Button
        onClick={() => history.replace('/')}
        iconEnd={<Repeat />}
      >Again
      </Button>
    </GameOverStyled>
  );
};
