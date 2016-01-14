import React, { Component } from 'react';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as AccountActions from '../actions/accounts'
import * as LedgerActions from '../actions/ledger'
// import styles from './Home.module.css';
import { createSelector } from 'reselect'
// import accountTxnSelector from '../selectors/transactionSelectors';
import {accountSelector} from '../selectors/accountSelectors';

import AccountList from '../components/AccountList';
import TransactionList from '../components/TransactionList';

class Home extends Component {
  constructor(props)
  {
    super(props);
    this.state = {activeAccountId: 1};
  }
  loadDummy()
  {
    this.props.loadDummyAccounts();
    this.props.loadDummyTransactions();
  }
  showAccount(account_id)
  {
    this.setState({activeAccountId: account_id});
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
            <button className="btn btn-default" onClick={this.loadDummy.bind(this)}>
              <span className="icon icon-folder icon-text"></span>
              Load dummy data
            </button>
            </div>
        </header>
        <div className="window-content">
          <div className="pane-group">
            <div className="pane pane-sm sidebar">
              <AccountList title="Budget Accounts" onBudget={true} activeItem={this.state.activeAccountId} onSelect={this.showAccount.bind(this)}/>
              <AccountList title="Off-Budget Accounts" onBudget={false} activeItem={this.state.activeAccountId} onSelect={this.showAccount.bind(this)}/>
            </div>

            <div className="pane">
              <TransactionList accountId={this.state.activeAccountId}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null,
                      (dispatch) => bindActionCreators({...AccountActions,...LedgerActions}, dispatch))(Home);
