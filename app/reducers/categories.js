import { CATEGORY_INSERT, CATEGORY_UPDATE, CATEGORY_DELETE } from '../actions/categories';
// import { persistentReducer } from 'redux-pouchdb';

var _ = require('lodash');

function categories(state = [], action) {
  switch (action.type) {
  case CATEGORY_INSERT:
    // Auto generate ID
    if(!action.category.hasOwnProperty('_id'))
      action.category._id = (state.length > 0) ? _.max(state, cat => cat._id)._id+1 : 1;

    // Set default parent ID if none specified (maybe unnecessary)
    if(!action.category.hasOwnProperty('parent_id'))
      action.category.parent_id = -1;

    return [...state,action.category];
  case CATEGORY_UPDATE:
    return state.map(cat =>
        cat.id === action.category.id ?
          action.category :
          cat
      );
  case CATEGORY_DELETE:
    console.log('delete reducer')
    return state.filter(cat =>
        cat._id !== action.id
      );
  default:
    return state;
  }
}

export default categories;
// export default persistentReducer(categories);
