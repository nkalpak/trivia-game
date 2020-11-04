import Axios from 'axios';
import { useQuery } from 'react-query';
import { QuestionDifficulty } from '../question';
import { API } from '../../../../global';
import { QuestionsApiResponse } from './questions-types';

export const useQuestions = (difficulty: QuestionDifficulty) => {
  const getQuestions = async () => Axios.get<QuestionsApiResponse>(API, {
    params: {
      amount: 10,
      category: 9,
      difficulty,
      type: 'multiple',
    },
  });

  const { data: response, isFetching } = useQuery('questions', getQuestions, {
    refetchOnWindowFocus: false,
  });

  return {
    questions: response?.data.results,
    isFetching,
  };
};
