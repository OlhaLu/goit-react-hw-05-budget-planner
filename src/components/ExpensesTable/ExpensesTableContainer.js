import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import * as actions from '../../redux/budgetApp/action';
import * as selects from '../../redux/budgetApp/select';

const mapStateToProps = state => ({
  items: selects.getExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(actions.removeExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
