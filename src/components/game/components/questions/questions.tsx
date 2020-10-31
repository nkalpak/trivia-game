import React, { useReducer } from 'react';
import { AnswerType, QuestionType } from '../question';
import { Question } from '../question/question';
import { AnswerCorrect } from '../answer-correct/answer-correct';
import { AnswerIncorrect } from '../answer-incorrect/answer-incorrect';
import { useGameContext } from '../../game';
import { ShouldRender } from '../../../../packages/should-render/should-render';
import { questionsInitialState, questionsReducer } from './questions-utils';

interface QuestionsProps {
  questions?: QuestionType[];
}

export const Questions: React.FC<QuestionsProps> = ({ questions }) => {
  const [{
    currentQuestionIndex,
    latestAnswer,
    showPendingScreen,
  }, dispatch] = useReducer(questionsReducer, questionsInitialState);

  const { setScore, setState } = useGameContext();

  const handleAnswer = (answer: AnswerType) => {
    dispatch({ type: 'answer', payload: answer });
  };

  const handleCorrect = () => {
    if (!questions) return;

    dispatch({ type: 'next_question' });
    if (currentQuestionIndex >= questions.length - 1) {
      setState('win');
    }

    setScore(s => s + 1);
  };

  return (
    <>
      {questions && (
        <ShouldRender condition={!showPendingScreen}>
          <Question
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        </ShouldRender>
      )}

      <ShouldRender condition={showPendingScreen}>
        <>
          <ShouldRender condition={!!latestAnswer?.correct}>
            <AnswerCorrect onClick={handleCorrect} />
          </ShouldRender>

          <ShouldRender condition={!latestAnswer?.correct}>
            <AnswerIncorrect />
          </ShouldRender>
        </>
      </ShouldRender>
    </>
  );
};
