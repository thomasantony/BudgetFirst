import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ItemManager extends Component {
  render() {
    return (
      <div>
      <h2>Items</h2>
      <div className={{position: 'absolute'}}>
        <Link to="/">
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      </div>
    );
  }
}
