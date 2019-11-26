import { combineReducers } from 'redux';
import types from './type';

const budget = (state = 0, { action }) => {
  switch (action.type) {
    case types.ADD_BUDGET:
      return action.payload;
    default:
      return state;
  }
};

const expenses = (state = [], { action }) => {
  switch (type) {
    case types.ADD_EXPENSE:
      return [...state, action.payload ];
    case types.REMOVE_EXPENSE:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const BudgetAppReducer = combineReducers({
  budget,
  expenses,
});

export default BudgetAppReducer;
