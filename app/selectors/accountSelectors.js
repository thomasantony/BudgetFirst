import { createSelector } from 'reselect'

const rawAccountSelector = state => state.accounts


// Selector that filters out transactions by account id
const txnSelector = state => state.ledger
const acctIdSelector = (_,props) => props.account_id
export const accountTxnSelector = createSelector(
  txnSelector,
  acctIdSelector,
  (transactions, account_id) => {
    return {
      transactions: transactions.filter((txn) => txn.account_id == account_id)
    }
  }
);

export const accountSelector = createSelector(
  rawAccountSelector,
  (allAccounts) => {
    return {
      accounts: allAccounts.map( acct => ({
        ...acct,
        balance: 0.0  // TODO: Add up all old transactions to openingBalance here
      })),
    }
  }
);
