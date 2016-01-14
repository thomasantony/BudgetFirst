import React from 'react';
import { connect } from 'react-redux';
import {accountTxnSelector} from '../selectors/accountSelectors';

// TODO: Add back running balance using actual value
const TransactionList = ({transactions}) => {
  return (
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
          <td style={{color:'red'}}>{txn.amount < 0 ? txn.amount : ''}</td>
          <td>{txn.amount > 0 ? txn.amount : ''}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}
export default connect(accountTxnSelector)(TransactionList);
