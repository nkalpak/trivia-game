import { QuestionsActionType, QuestionsReducerState } from './questions-types';

export const questionsInitialState = {
  currentQuestionIndex: 0,
  latestAnswer: undefined,
  showPendingScreen: false,
};

export const questionsReducer = (state: QuestionsReducerState, action: QuestionsActionType): QuestionsReducerState => {
  switch (action.type) {
    case 'answer': return {
      currentQuestionIndex: state.currentQuestionIndex + 1,
      latestAnswer: action.payload,
      showPendingScreen: true,
    };
    case 'next_question': return {
      ...state,
      showPendingScreen: false,
    };
    default: throw new Error('Unsupported action type');
  }
};
