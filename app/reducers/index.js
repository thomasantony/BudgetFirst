import { combineReducers } from 'redux';
import accounts from './accounts';
import budget from './budget';
import categories from './categories';
import ledger from './ledger';

const rootReducer = combineReducers({
  accounts,
  budget,
  categories,
  ledger
});

export default rootReducer;
