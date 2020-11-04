import Axios from 'axios';
import { useQuery } from 'react-query';
import { QuestionDifficulty, QuestionType } from '../question';
import { API } from '../../../../global';

export const useQuestions = (difficulty: QuestionDifficulty) => {
  const getQuestions = async () => Axios.get<any, QuestionType[]>(API, {
    params: {
      amount: 10,
      category: 9,
      difficulty,
      type: 'multiple',
    },
  });

  return useQuery<QuestionType[]>('questions', getQuestions, {
    refetchOnWindowFocus: false,
  });
};
