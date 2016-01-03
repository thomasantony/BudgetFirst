import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CategoryManager from './containers/CategoryManager';
import ItemManager from './containers/ItemManager';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/categories" component={CategoryManager} />
    <Route path="/items" component={ItemManager} />
  </Route>
);
