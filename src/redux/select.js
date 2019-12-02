export const getBudget = state => state.budget;

export const calculateTotalExpenses = state => {
  state.expenses.reduce((total, expense) => total + expense.amount, 0);
  };
  
  export const calculateBalance = state => getBudget(state) - getExpenses(state);

  export const getExpenses = state => state.expenses;
