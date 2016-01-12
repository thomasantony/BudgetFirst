import React, { Component } from 'react';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as AccountActions from '../actions/accounts'
// import styles from './Home.module.css';

import AccountList from './AccountList';

class Home extends Component {
  componentDidMount()
  {
    this.props.loadDummyAccounts();
  }
  render() {
    return (
      <div className="window">

        <header className="toolbar toolbar-header">
          <h1 className="title">Budget First</h1>

            <div className="toolbar-actions">
            <div className="btn-group">
              <button className="btn btn-default">
                <span className="icon icon-home"></span>
              </button>
              <button className="btn btn-default active">
                <span className="icon icon-doc-text"></span>
              </button>
              <button className="btn btn-default">
                <span className="icon icon-chart-bar"></span>
              </button>
              <button className="btn btn-default">
                <span className="icon icon-cog"></span>
              </button>
            </div>
            </div>
        </header>
        <div className="window-content">
          <div className="pane-group">
            <div className="pane pane-sm sidebar">
              <AccountList accounts={this.props.accounts}/>
            </div>

            <div className="pane">
              <table className="table-striped">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Payee</th>
                    <th>Category</th>
                    <th>Memo</th>
                    <th>Outflow</th>
                    <th>Inflow</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01/09/16</td>
                    <td>T-Mobile</td>
                    <td>Phone/Internet</td>
                    <td></td>
                    <td>60.00</td>
                    <td></td>
                    <td style={{color:'red'}}>-60.00</td>
                  </tr>
                  <tr>
                    <td>01/15/16</td>
                    <td>Transfer: Checking Account</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>60.00</td>
                    <td>0.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({accounts: state.accounts}),
                      (dispatch) => bindActionCreators(AccountActions, dispatch))(Home);
