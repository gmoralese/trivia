import { ILevel } from '../models/level.model';

export const levels: ILevel = {
  easy: [
    {
      difficulty: 'easy',
      amount: 30,
    },
  ],
  medium: [
    {
      difficulty: 'easy',
      amount: 15,
    },
    {
      difficulty: 'medium',
      amount: 25,
    },
  ],
  hard: [
    {
      difficulty: 'medium',
      amount: 30,
    },
    {
      difficulty: 'hard',
      amount: 30,
    },
  ],
  inferno: [
    {
      difficulty: 'hard',
      amount: 70,
    },
  ],
};
