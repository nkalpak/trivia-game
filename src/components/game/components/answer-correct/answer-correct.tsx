import React from 'react';
import { Limelight } from '../../../limelight/limelight';
import { ThumbsUp } from '../../../../assets/icons/thumbs-up/thumbs-up';
import { Button } from '../../../button/button';
import { Arrow } from '../../../../assets/icons/arrow/arrow';

interface AnswerCorrectProps {
  onClick: React.MouseEventHandler;
}

export const AnswerCorrect: React.FC<AnswerCorrectProps> = ({ onClick }) => (
  <div>
    <Limelight><ThumbsUp /></Limelight>
    <Button
      onClick={onClick}
      iconEnd={<Arrow />}
    >Next
    </Button>
  </div>
);
