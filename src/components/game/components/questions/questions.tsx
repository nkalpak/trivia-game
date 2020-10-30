import React, { useState } from 'react';
import { AnswerType, QuestionType } from '../../../../global/types';
import { Question } from '../question/question';
import { AnswerCorrect } from '../answer-correct/answer-correct';
import { AnswerIncorrect } from '../answer-incorrect/answer-incorrect';

interface QuestionsProps {
  questions?: QuestionType[];
}

export const Questions: React.FC<QuestionsProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lastAnswer, setLastAnswer] = useState<AnswerType>();
  const [showMiddleScreen, setShowMiddleScreen] = useState(false);

  const handleAnswer = (answer: AnswerType) => {
    setLastAnswer(answer);
    setCurrentQuestionIndex(i => i + 1);
    setShowMiddleScreen(true);
  };

  const handleCorrect = () => {
    setShowMiddleScreen(false);
  };
  const handleIncorrect = () => {
    setShowMiddleScreen(false);
  };

  return (
    <div>
      {questions && !showMiddleScreen && (
      <Question
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
      )}

      {showMiddleScreen && lastAnswer?.correct && <AnswerCorrect onClick={handleCorrect} />}
      {showMiddleScreen && !lastAnswer?.correct && <AnswerIncorrect onClick={handleIncorrect} />}
    </div>
  );
};
