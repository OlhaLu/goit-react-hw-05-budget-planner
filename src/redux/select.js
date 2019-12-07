export const getBudget = state => console.log(state.budget);

export const getExpenses = state => console.log(state.expenses);

export const calculateTotalExpenses = state => {
  state.expenses.reduce((total, expense) => total + expense.amount, 0);
};

export const calculateBalance = state =>
  getBudget(state) - calculateTotalExpenses(state);
