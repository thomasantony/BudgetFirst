import { ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../actions/categories';
import lodash from 'lodash';

export default function categories(state = [], action) {
  switch (action.type) {
    case ADD_CATEGORY:
      let new_id = state.reduce((maxId, cat) => Math.max(cat.id, maxId), 0) + 1;
      return [
        ...state,
        Object.assign({}, action.payload, {
          id: new_id
        })  // new id gets precedence
      ]
    case UPDATE_CATEGORY:
      return state.map(cat => (cat.id == action.id) ? action.payload : cat);

    case DELETE_CATEGORY:
      return state.filter(cat => cat.id != action.id);
    default:
      return state;
  }
}
