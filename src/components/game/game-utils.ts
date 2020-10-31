import { AnswerType } from './components/question';

interface QuestionsState {
  currentQuestionIndex: number;
  latestAnswer?: AnswerType;
  showPendingScreen: boolean;
}

type QuestionsActionType =
  | { type: 'answer', payload: AnswerType }
  | { type: 'next_question' }

export const questionsInitialState = {
  currentQuestionIndex: 0,
  latestAnswer: undefined,
  showPendingScreen: false,
};

export const questionsReducer = (state: QuestionsState, action: QuestionsActionType): QuestionsState => {
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
