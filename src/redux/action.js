import types from './type';

export const onAddBudget = value => {
    return {
    type: types.ADD_BUDGET,
    payload: {
      value,
    },
}
};

export const onAddExpense = value => {
    return {
  type: types.ADD_EXPENSE,
  payload: {
    value,
  },
}
};

export const onRemoveExpense = id => {
    return {
    type: types.REMOVE_EXPENSE,
    payload: {
        id,
    },
}
};