import { INSERT_ACCOUNT, UPDATE_ACCOUNT, DELETE_ACCOUNT } from '../actions/items';

export default function items(state = [], action) {
  switch (action.type) {
  case INSERT_ACCOUNT:
    return state;
  case UPDATE_ACCOUNT:
    return state;
  case DELETE_ACCOUNT:
    return state;
  default:
    return state;
  }
}
