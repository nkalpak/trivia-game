import React from 'react';
import { Limelight } from '../../../limelight/limelight';
import { Button } from '../../../button/button';
import { Arrow } from '../../../../assets/icons/arrow/arrow';
import { ThumbsDown } from '../../../../assets/icons/thumbs-down/thumbs-down';

interface AnswerIncorrectProps {
  onClick: React.MouseEventHandler;
}

export const AnswerIncorrect: React.FC<AnswerIncorrectProps> = ({ onClick }) => (
  <div>
    <Limelight><ThumbsDown /></Limelight>
    <Button
      onClick={onClick}
      iconEnd={<Arrow />}
    >Next
    </Button>
  </div>
);
