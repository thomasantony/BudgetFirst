import React, { Component, PropTypes } from 'react';

import DevTools from './DevTools';

class App extends Component {
  // static propTypes = {
  //   children: PropTypes.element.isRequired
  // };

  render() {
    return (
      <div>
        {this.props.children}
        {
        (() => {
          if (process.env.NODE_ENV !== 'production') {
            // const DevTools = require('./DevTools');
            // console.log(DevTools)
            return <DevTools />;
          }
        })()
      }
      </div>
    );
  }
}
export default App;
