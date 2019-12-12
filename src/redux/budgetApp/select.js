export const getBudget = state => state.budget;

export const getExpenses = state => state.expenses;

export const calculateTotalExpenses = state => {
  state.expenses.reduce((total, expense) => total + Number(expense), 0);
};

export const calculateBalance = state =>
  getBudget(state) - calculateTotalExpenses(state);

// export const getFilteredExpensById = (state, id) => {
//   const expenses = getExpenses(state);
//   return expenses.find(expense => expense.id === id);
// };