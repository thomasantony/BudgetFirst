import { createSelector } from 'reselect'

const rawAccountSelector = state => state.accounts

// Prop selectors
const accountIdSelector = (_,props) => props.accountId
const onBudgetSelector = (_,props) => props.onBudget

// Selector that filters out transactions by account id
const txnSelector = state => state.ledger

export const accountTxnSelector = createSelector(
  txnSelector,
  accountIdSelector,
  (transactions, account_id) => {
    return {
      transactions: transactions.filter((txn) => txn.account_id == account_id)
    }
  }
);

export const budgetAccountSelector = createSelector(
  rawAccountSelector,
  onBudgetSelector,
  (accounts, onBudget) => accounts.filter(acct => acct.onBudget == onBudget)
)

export const accountSelector = createSelector(
  budgetAccountSelector,
  (accounts) => {
    return {
      accounts: accounts.map( acct => ({
        ...acct,
        balance: 0.0  // TODO: Add up all old transactions to openingBalance here
      })),
    }
  }
);
