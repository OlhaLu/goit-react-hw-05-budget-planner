import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import * as actions from '../../redux/action';

const mapDispatchToProps = dispatch => ({
    onSave: input => dispatch(actions.onAddBudget(input)),
});

export default connect(null, mapDispatchToProps,
)(BudgetForm);