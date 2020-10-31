import { Dispatch, SetStateAction } from 'react';

export type GameState = 'playing' | 'win' | 'lose';

export interface GameContextType {
  score: number;
  state: GameState;
  setScore: Dispatch<SetStateAction<number>>;
  setState: Dispatch<SetStateAction<GameState>>;
}
