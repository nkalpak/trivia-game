import Axios from 'axios';
import { useQuery } from 'react-query';
import { API } from '../../global';
import { QuestionType, QuestionDifficulty } from './components/question';

export const useQuestions = (difficulty: QuestionDifficulty) => {
  const getQuestions = async () => Axios.get(API, {
    params: {
      amount: 10,
      category: 9,
      difficulty,
      type: 'multiple',
    },
  });

  const { data, isFetching, error } = useQuery('questions', getQuestions, {
    refetchOnWindowFocus: false,
  });

  return {
    questions: data?.data.results as QuestionType[],
    isFetching,
    error,
  };
};
