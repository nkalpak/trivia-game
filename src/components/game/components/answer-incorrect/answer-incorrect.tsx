import React, { useEffect } from 'react';
import { Limelight } from '../../../../packages/limelight/limelight';
import { ThumbsDown } from '../../../../assets/icons/thumbs-down/thumbs-down';
import { useGameContext } from '../../game';

export const AnswerIncorrect = () => {
  const { setState } = useGameContext();

  useEffect(() => {
    const id = setTimeout(() => setState('lose'), 1000);

    return () => clearTimeout(id);
  }, [setState]);

  return (
    <Limelight><ThumbsDown /></Limelight>
  );
};
