import { ADD_BUDGET_PERIOD, UPDATE_BUDGET_PERIOD, DELETE_BUDGET_PERIOD } from '../actions/budget';
import lodash from 'lodash';

export default function budget(state = {}, action) {
  switch (action.type) {
  case ADD_BUDGET_PERIOD:

    return {...state,
            [action.period]: action.payload
           }
    return state;
  case UPDATE_BUDGET_PERIOD:
    return lodash.mapValues(state, (val,period) =>
      (period == action.period) ? action.payload : val
    );
  case DELETE_BUDGET_PERIOD:
    return lodash.pick(state, (_,period) => period != action.period );
  default:
    return state;
  }
}
