import { Dispatch, SetStateAction } from 'react';
import { GameState } from '../../global';

export interface GameContextType {
  score: number;
  state: GameState;
  setScore: Dispatch<SetStateAction<number>>;
  setState: Dispatch<SetStateAction<GameState>>;
}
