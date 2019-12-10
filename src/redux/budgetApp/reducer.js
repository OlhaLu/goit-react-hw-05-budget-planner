import types from './type';

export const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case types.ADD_BUDGET:
      return payload.value;
    default:
      return state;
  }
};

export const expenseReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_EXPENSE:
      return [payload.amount, ...state];
    case types.REMOVE_EXPENSE:
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
};