import { INSERT_BUDGET_CATEGORY, UPDATE_BUDGET_CATEGORY, DELETE_BUDGET_CATEGORY } from '../actions/items';

export default function items(state = [], action) {
  switch (action.type) {
  case INSERT_BUDGET_CATEGORY:
    return state;
  case UPDATE_BUDGET_CATEGORY:
    return state;
  case DELETE_BUDGET_CATEGORY:
    return state;
  default:
    return state;
  }
}
