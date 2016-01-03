import { combineReducers } from 'redux';
import categories from './categories';
import items from './items';

const rootReducer = combineReducers({
  categories,
  items
});

export default rootReducer;
