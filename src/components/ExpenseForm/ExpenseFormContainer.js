import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import * as actions from '../../redux/budgetApp/action';

const mapDispatchToProps = dispatch => ({
  onSave: ({ name, amount }) => dispatch(actions.addExpense(({ name, amount }))),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
