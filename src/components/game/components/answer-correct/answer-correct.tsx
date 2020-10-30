import React from 'react';
import { Limelight } from '../../../../packages/limelight/limelight';
import { ThumbsUp } from '../../../../assets/icons/thumbs-up/thumbs-up';
import { Button } from '../../../button/button';
import { Arrow } from '../../../../assets/icons/arrow/arrow';
import { AnswerCorrectStyled } from './answer-correct-styles';

interface AnswerCorrectProps {
  onClick: React.MouseEventHandler;
}

export const AnswerCorrect: React.FC<AnswerCorrectProps> = ({ onClick }) => (
  <AnswerCorrectStyled>
    <Limelight><ThumbsUp /></Limelight>
    <Button
      onClick={onClick}
      iconEnd={<Arrow />}
    >Next
    </Button>
  </AnswerCorrectStyled>
);
