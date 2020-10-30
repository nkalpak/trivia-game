import React, { useState } from 'react';
import { AnswerType, QuestionType } from '../../../../global/types';
import { Question } from '../question/question';
import { AnswerCorrect } from '../answer-correct/answer-correct';
import { AnswerIncorrect } from '../answer-incorrect/answer-incorrect';
import { useGameContext } from '../../game';
import { ShouldRender } from '../../../should-render/should-render';

interface QuestionsProps {
  questions?: QuestionType[];
}

export const Questions: React.FC<QuestionsProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lastAnswer, setLastAnswer] = useState<AnswerType>();
  const [showPendingScreen, setShowPendingScreen] = useState(false);

  const { setScore, setState } = useGameContext();

  const handleAnswer = (answer: AnswerType) => {
    setLastAnswer(answer);
    setCurrentQuestionIndex(i => i + 1);
    setShowPendingScreen(true);
  };

  const handleCorrect = () => {
    if (!questions) return;

    if (currentQuestionIndex >= questions.length - 1) {
      setState('win');
    }

    setScore(s => s + 1);
    setShowPendingScreen(false);
  };

  return (
    <>
      {questions && !showPendingScreen && (
      <Question
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
      )}

      <ShouldRender condition={showPendingScreen}>
        <>
          <ShouldRender condition={!!lastAnswer?.correct}>
            <AnswerCorrect onClick={handleCorrect} />
          </ShouldRender>

          <ShouldRender condition={!lastAnswer?.correct}>
            <AnswerIncorrect />
          </ShouldRender>
        </>
      </ShouldRender>
    </>
  );
};
