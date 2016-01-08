import { INSERT_TRANSACTION, UPDATE_TRANSACTION, DELETE_TRANSACTION } from '../actions/items';

export default function items(state = [], action) {
  switch (action.type) {
  case INSERT_TRANSACTION:
    return state;
  case UPDATE_TRANSACTION:
    return state;
  case DELETE_TRANSACTION:
    return state;
  default:
    return state;
  }
}
