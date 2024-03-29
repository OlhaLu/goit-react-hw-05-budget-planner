import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import * as actions from '../../redux/budgetApp/action';

const mapDispatchToProps = dispatch => ({
  onSave: expense => dispatch(actions.addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
