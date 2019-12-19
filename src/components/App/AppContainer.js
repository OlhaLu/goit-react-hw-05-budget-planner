import { connect } from 'react-redux';
import App from './App';
import * as selects from '../../redux/budgetApp/select';

const mapStateToProps = state => ({
  expenses: selects.getExpenses(state),
});

export default connect(mapStateToProps)(App);
