import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';


import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

// import { persistentStore } from 'redux-pouchdb';

// import PouchMiddleware from 'pouch-redux-middleware'
// const db = new PouchDB('posdb', {adapter: 'leveldb'})

const finalCreateStore = compose(
  // applyMiddleware(categoryMiddleware),
  // applyMiddleware(itemMiddleware),
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  ),
  // persistentStore(db)
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
