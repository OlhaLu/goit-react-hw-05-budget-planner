import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import * as actions from '../../redux/action';

const mapDispatchToProps = dispatch => ({
  onSave: input => dispatch(actions.onAddExpense(input)),
});

export default connect(null, mapDispatchToProps,
)(ExpenseForm);