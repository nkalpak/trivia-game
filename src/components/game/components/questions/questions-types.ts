import { AnswerType } from '../question';

export interface QuestionsReducerState {
  currentQuestionIndex: number;
  latestAnswer?: AnswerType;
  showPendingScreen: boolean;
}

export type QuestionsReducerAction =
  | { type: 'answer', payload: AnswerType }
  | { type: 'next_question' }
