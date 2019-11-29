import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import * as actions from '../../redux/action';
import { calculateTotalExpenses } from '../../redux/select';

const mapStateToProp = state => ({
  items: calculateTotalExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(actions.onRemoveExpense(id)),
});

export default connect(
  mapStateToProp,
  mapDispatchToProps,
)(ExpensesTable);