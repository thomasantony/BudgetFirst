import { INSERT_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../actions/items';

export default function items(state = [], action) {
  switch (action.type) {
  case INSERT_ITEM:
    return state;
  case UPDATE_ITEM:
    return state;
  case DELETE_ITEM:
    return state;
  default:
    return state;
  }
}
