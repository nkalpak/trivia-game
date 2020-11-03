import React, { useReducer } from 'react';
import { AnswerType, QuestionDifficulty } from '../question';
import { Question } from '../question/question';
import { AnswerCorrect } from '../answer-correct/answer-correct';
import { AnswerIncorrect } from '../answer-incorrect/answer-incorrect';
import { useGameContext } from '../../game';
import { ShouldRender } from '../../../../packages/should-render/should-render';
import { useQueryParams } from '../../../../utils';
import { Routing } from '../../../../global';
import { questionsInitialState, questionsReducer } from './questions-utils';
import { useQuestions } from './use-questions';

export const Questions = () => {
  const queryParams = useQueryParams();
  const { questions, isFetching } = useQuestions(queryParams.get(Routing.Play.Params.difficulty) as QuestionDifficulty);

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
      <ShouldRender condition={!showPendingScreen}>
        <Question
          loading={isFetching}
          question={questions?.[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      </ShouldRender>

      <ShouldRender condition={showPendingScreen}>
        <ShouldRender condition={!!latestAnswer?.correct}>
          <AnswerCorrect onClick={handleCorrect} />
        </ShouldRender>

        <ShouldRender condition={!latestAnswer?.correct}>
          <AnswerIncorrect />
        </ShouldRender>
      </ShouldRender>
    </>
  );
};
