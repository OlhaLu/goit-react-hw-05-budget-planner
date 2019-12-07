import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import * as actions from '../../redux/action';
import * as selects from '../../redux/select';

const mapStateToProp = state => ({
  items: selects.getExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(actions.removeExpense(id)),
});

export default connect(mapStateToProp, mapDispatchToProps)(ExpensesTable);
