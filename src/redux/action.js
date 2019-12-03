import types from './type';

export const addBudget = value => {
    return {
    type: types.ADD_BUDGET,
    payload: {
      value: Number(value),
    },
  }
};

export const addExpense = value => {
    return {
  type: types.ADD_EXPENSE,
  payload: {
    value: Number(value),
  },
}
};

export const removeExpense = id => {
    return {
    type: types.REMOVE_EXPENSE,
    payload: {
        id,
    },
  }
};