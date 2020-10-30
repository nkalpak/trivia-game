import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HeadingStyled } from '../app/app-styles';
import { Button } from '../button/button';
import { Star } from '../../assets/icons/star/star';
import { QuestionDifficulty } from '../../global/types';

export const Welcome = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<QuestionDifficulty>('easy');
  const history = useHistory();

  // eslint-disable-next-line consistent-return
  const mapDifficultyText = (difficulty: QuestionDifficulty) => {
    // eslint-disable-next-line default-case
    switch (difficulty) {
      case 'easy': return 'Go easy on me';
      case 'medium': return 'Bring it on';
      case 'hard': return 'Insanity mode';
    }
  };

  const getButtonIcon = (difficulty: QuestionDifficulty) => {
    if (difficulty === selectedDifficulty) return <Star />;
    return null;
  };

  const difficulties: QuestionDifficulty[] = ['easy', 'medium', 'hard'];

  return (
    <>
      <HeadingStyled size={50}>TriviaTime</HeadingStyled>
      <HeadingStyled size={25}>Pick your level of difficulty</HeadingStyled>

      <div>
        {difficulties.map((d, i) => (
          <Button
            key={d + i}
            kind="secondary"
            iconStart={getButtonIcon(d)}
            onClick={() => setSelectedDifficulty(d)}
          >
            {mapDifficultyText(d)}
          </Button>
        ))}
        <Button
          onClick={() => history.push(`/play?difficulty=${selectedDifficulty}`)}
          kind="primary"
        >Play Now
        </Button>
      </div>
    </>
  );
};
