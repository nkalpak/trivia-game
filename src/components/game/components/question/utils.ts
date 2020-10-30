import { AnswerType, QuestionType } from '../../../../global/types';
import { shuffle } from '../../../../utils/shuffle';

export const mapAnswers = (question: QuestionType): AnswerType[] => {
  const incorrect = question.incorrect_answers.map(a => ({ answer: a, correct: false }));
  const correct = { answer: question.correct_answer, correct: true };

  return shuffle([...incorrect, correct]);
};

export const replaceHtmlQuoteAttribute = (q: string) => q.replaceAll('&quot;', '"');
