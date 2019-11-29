import types from './type';
const shortid = require('shortid');

export const onAddBudget = value => {
    return {
    type: types.ADD_BUDGET,
    payload: {
      value: Number(value),
    },
}
};

export const onAddExpense = value => {
    return {
  type: types.ADD_EXPENSE,
  payload: {
    value: Number(value),
    id: shortid.generate(),
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