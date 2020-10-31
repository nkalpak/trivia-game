import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HeadingStyled } from '../app/app-styles';
import { Button } from '../button/button';
import { Star } from '../../assets/icons/star/star';
import { QuestionDifficulty } from '../game/components/question';
import { createUri } from '../../utils';
import { ButtonGroupStyled, DesktopCard, DifficultyTextStyled, WelcomeStyled } from './welcome-styles';

export const Welcome = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<QuestionDifficulty>('easy');
  const history = useHistory();

  const mapDifficultyText = (difficulty: QuestionDifficulty) => {
    switch (difficulty) {
      case 'easy': return 'Go easy on me';
      case 'medium': return 'Bring it on';
      case 'hard': return 'Insanity mode';
      default: return '';
    }
  };

  const difficulties: QuestionDifficulty[] = ['easy', 'medium', 'hard'];

  return (
    <DesktopCard>
      <WelcomeStyled>
        <HeadingStyled size={50}>TriviaTime</HeadingStyled>
        <DifficultyTextStyled>
          <HeadingStyled
            size={25}
          >Pick your level of difficulty
          </HeadingStyled>
        </DifficultyTextStyled>

        <ButtonGroupStyled>
          {difficulties.map((d, i) => (
            <Button
              key={d + i}
              kind="secondary"
              iconStart={d === selectedDifficulty ? <Star /> : null}
              onClick={() => setSelectedDifficulty(d)}
            >
              {mapDifficultyText(d)}
            </Button>
          ))}

          <Button
            onClick={() => history.push(createUri(['play'], { difficulty: selectedDifficulty }))}
            kind="primary"
          >Play Now
          </Button>
        </ButtonGroupStyled>
      </WelcomeStyled>
    </DesktopCard>
  );
};
