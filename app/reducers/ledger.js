import { ADD_TRANSACTION, UPDATE_TRANSACTION, DELETE_TRANSACTION } from '../actions/ledger';

export default function ledger(state = [], action) {
  switch (action.type) {
  case ADD_TRANSACTION:
    return state;
  case UPDATE_TRANSACTION:
    return state;
  case DELETE_TRANSACTION:
    return state;
  default:
    return state;
  }
}
