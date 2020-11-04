import Axios from 'axios';
import { useQuery } from 'react-query';
import { QuestionDifficulty, QuestionType } from '../question';
import { API } from '../../../../global';

export const useQuestions = (difficulty: QuestionDifficulty) => {
  const getQuestions = async () => Axios.get(API, {
    params: {
      amount: 10,
      category: 9,
      difficulty,
      type: 'multiple',
    },
  });

  const { data, isFetching } = useQuery('questions', getQuestions, {
    refetchOnWindowFocus: false,
  });

  return {
    questions: data?.data.results as QuestionType[],
    isFetching,
  };
};
