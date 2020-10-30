import Axios from 'axios';
import { useQuery } from 'react-query';
import { API } from '../../global';
import { QuestionType, QuestionDifficulty } from '../../global/types';

export const useQuestions = (difficulty: QuestionDifficulty) => {
  const getQuestions = async () => Axios.get(`${API}`, {
    params: {
      amount: 10,
      category: 9,
      difficulty,
      type: 'multiple',
    },
  });

  const { refetch, data, isLoading, error } = useQuery('questions', getQuestions);

  return {
    refetch,
    data: data?.data.results as QuestionType[],
    isLoading,
    error,
  };
};
