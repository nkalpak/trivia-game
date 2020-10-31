import { shuffle } from '../../../../utils/shuffle';
import { AnswerType, QuestionType } from '.';

export const mapAnswers = (question: QuestionType): AnswerType[] => {
  const incorrect = question.incorrect_answers.map(a => ({ answer: a, correct: false }));
  const correct = { answer: question.correct_answer, correct: true };

  return shuffle([...incorrect, correct]);
};
