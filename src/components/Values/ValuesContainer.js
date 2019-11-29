import { connect } from 'react-redux';
import Values from './Values';
import {
  getBudget,
  getExpenses,
  calculateBalance,
} from '../../redux/select';

const mapStateToProp = state => ({
  budget: getBudget(state),
  expenses: getExpenses(state),
  balance: calculateBalance(state),
});

export default connect(mapStateToProp)(Values);