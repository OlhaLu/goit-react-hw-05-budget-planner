import types from './type';
const shortid = require('shortid');

export const addBudget = value => {
  return {
    type: types.ADD_BUDGET,
    payload: {
      value: Number(value),
    },
  }
};

export const addExpense = ({ name, amount }) => ({
    type: types.ADD_EXPENSE,
    payload: {
        id: shortid.generate(),
        name: name,
        amount: Number(amount),
  },
});

export const removeExpense = id => {
  return {
    type: types.REMOVE_EXPENSE,
    payload: {
      id,
    },
  };
};
