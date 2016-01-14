import React from 'react';
import { connect } from 'react-redux';
import {accountTxnSelector} from '../selectors/accountSelectors';

// TODO: Add back running balance using actual value
const TransactionList = ({transactions, onAddTransfer, onAddTxn, ...otherProps}) => {
  return (
    <div {...otherProps}>
    <table className="table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Payee</th>
          <th>Category</th>
          <th>Memo</th>
          <th>Outflow</th>
          <th>Inflow</th>
        </tr>
      </thead>
      <tbody>
      { transactions.map((txn) => (
        <tr key={txn.id}>
          <td>{txn.date}</td>
          <td>{txn.payee}</td>
          <td>{txn.category}</td>
          <td>{txn.memo}</td>
          <td style={{color:'red'}}>{txn.amount < 0 ? (txn.amount).toFixed(2) : ''}</td>
          <td>{txn.amount > 0 ? (txn.amount).toFixed(2) : ''}</td>
        </tr>
      ))}
      </tbody>
    </table>
    <div className="pane" style={{padding:'10px 0px', borderLeftWidth:'0px'}}>
      <button className="btn btn-default" style={{margin:'auto 5px'}} onClick={onAddTxn}>
        <span className="icon icon-plus icon-text"></span>
        Add a new transaction
      </button>
      <button className="btn btn-default" style={{margin:'auto 5px'}} onClick={onAddTransfer}>
        <span className="icon icon-switch icon-text"></span>
        Make a transfer
      </button>
    </div>
  </div>
  )
}
export default connect(accountTxnSelector)(TransactionList);
