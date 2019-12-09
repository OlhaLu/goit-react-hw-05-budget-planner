export const getBudget = state => state.budget;

export const getExpenses = state => state.expenses;

export const calculateTotalExpenses = state => {
  state.expenses.reduce((total, expense) => total + expense.amount, 0);
};

export const calculateBalance = state =>
  getBudget(state) - calculateTotalExpenses(state);
