import { connect } from 'react-redux';
import Values from './Values';
import * as selects from '../../redux/budgetApp/select';

const mapStateToProps = state => ({
  budget: selects.getBudget(state),
  expenses: selects.getExpenses(state),
  balance: selects.calculateBalance(state),
});

export default connect(mapStateToProps)(Values);
