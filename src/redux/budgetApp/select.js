export const getBudget = state => state.budget;
export const getExpenses = state => state.expenses;

export const calculateTotalExpenses = expenses => {
  return expenses.reduce((total, value) => total + value.amount, 0);
};

export const calculateBalance = state =>
  getBudget(state) - calculateTotalExpenses(state.expenses);
