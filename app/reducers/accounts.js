import { ADD_ACCOUNT, UPDATE_ACCOUNT, DELETE_ACCOUNT } from '../actions/account';
import lodash from 'lodash';

export default function account(state = {}, action) {
  switch (action.type) {
  case ADD_ACCOUNT:

    return {...state,
            [action.period]: action.payload
           }
    return state;
  case UPDATE_ACCOUNT:
    return lodash.mapValues(state, (val,period) =>
      (period == action.period) ? action.payload : val
    );
  case DELETE_ACCOUNT:
    return lodash.pick(state, (_,period) => period != action.period );
  default:
    return state;
  }
}
