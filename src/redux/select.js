// import { createSelector } from 'reselect';

export const getBudget = state => state.budget;
export const getExpenses = state => state.expenses;
  
export const calculateBalance = state => getBudget(state) - getExpenses(state);

export const calculateTotalExpenses = state => {
    return state.expenses.reduce((total, expense) => total + expense.amount, 0);
  };

