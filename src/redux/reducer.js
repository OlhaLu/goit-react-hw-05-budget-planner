import { combineReducers } from 'redux';
import types from './type';

const budgetReducer = (state = 0,  { type, payload }) => {
  switch (type) {
    case types.ADD_BUDGET:
      return payload;
    default:
      return state;
  }
};

const expenseReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_EXPENSE:
      return [...state, payload ];
    case types.REMOVE_EXPENSE:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};

const BudgetAppReducer = combineReducers({
  budgetReducer,
  expenseReducer,
});

export default BudgetAppReducer;
