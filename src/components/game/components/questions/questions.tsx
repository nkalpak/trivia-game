import React, { useState } from 'react';
import { AnswerType, QuestionType } from '../../../../global/types';
import { Question } from '../question/question';

interface QuestionsProps {
  questions?: QuestionType[];
}

export const Questions: React.FC<QuestionsProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (answer: AnswerType) => {
    console.log(answer);
    setCurrentQuestionIndex(i => i + 1);
  };

  return (
    <div>
      {questions && (
      <Question
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
      )}
    </div>
  );
};
