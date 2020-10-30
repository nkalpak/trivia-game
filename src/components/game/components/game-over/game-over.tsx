import React from 'react';
import { useHistory } from 'react-router-dom';
import { Limelight } from '../../../limelight/limelight';
import { HeadingStyled } from '../../../app/app-styles';
import { Button } from '../../../button/button';
import { Repeat } from '../../../../assets/icons/repeat/repeat';
import { useGameContext } from '../../game';
import { GameOverStyled, LimelightWrapperStyled } from './game-over-styled';

export const GameOver = () => {
  const { score, state } = useGameContext();
  const history = useHistory();

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
        onClick={() => history.replace('/')}
        iconEnd={<Repeat />}
      >Again
      </Button>
    </GameOverStyled>
  );
};
