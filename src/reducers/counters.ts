import type { actionType } from '../interface/CountersReducers';

export default (state = 0, action:actionType): number => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.score;
    case 'DECREMENT':
      return state - action.score;
    default:
      return state;
  }
};
