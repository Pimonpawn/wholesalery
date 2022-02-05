import type { actionType } from '../interface/CountersReducers';

export const increment = (score = 1): actionType => ({
  type: 'INCREMENT',
  score,
});
export const decrement = (score = -1): actionType => ({
  type: 'DECREMENT',
  score,
});
