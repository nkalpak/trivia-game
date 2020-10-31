/* eslint-disable camelcase */
export type QuestionDifficulty = 'easy' | 'medium' | 'hard';

export interface QuestionType {
  category: string;
  correct_answer: string;
  difficulty: QuestionDifficulty;
  incorrect_answers: [string, string, string];
  question: string;
  type: string;
}

export interface AnswerType {
  answer: string;
  correct: boolean;
}
