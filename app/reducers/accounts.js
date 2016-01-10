import { ADD_ACCOUNT, UPDATE_ACCOUNT, DELETE_ACCOUNT } from '../actions/accounts';
import lodash from 'lodash';

export default function accounts(state = [], action) {
  switch (action.type) {
    case ADD_ACCOUNT:
      let new_id = state.reduce((maxId, account) => Math.max(account.id, maxId), 0) + 1;
      return [
        ...state,
        Object.assign({}, {
          id: new_id
        }, action.payload)
      ]
    case UPDATE_ACCOUNT:
      return state.map(acct => (acct.id == action.id) ? action.payload : acct);

    case DELETE_ACCOUNT:
      return state.filter(acct => acct.id != action.id);
    default:
      return state;
  }
}
