import { createSelector } from 'reselect';

export const getBudget = state => state.budget;
export const getExpenses = state => state.expenses;

export const calculateTotalExpenses = createSelector(getExpenses, expenses =>
 expenses.reduce((total, expense) => total + Number(expense.amount), 0),
);

export const calculateBalance = state =>
  getBudget(state) - calculateTotalExpenses(state);



