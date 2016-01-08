import { combineReducers } from 'redux';
import accounts from './accounts';
import budget from './budget';
import ledger from './ledger';

const rootReducer = combineReducers({
  accounts,
  budget,
  ledger
});

export default rootReducer;
