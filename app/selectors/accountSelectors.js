import { createSelector } from 'reselect'

const rawAccountSelector = state => state.accounts

// Prop selectors
const accountIdSelector = (_,props) => props.accountId
const onBudgetSelector = (_,props) => props.onBudget

// Selector that filters out transactions by account id
const txnSelector = state => state.ledger

const getTransactionsByAccount = (transactions, account_id) => {
  return transactions.filter((txn) => txn.account_id == account_id)
}
export const accountTxnSelector = createSelector(
  txnSelector,
  accountIdSelector,
  (transactions, account_id) => {
    return {
      transactions: getTransactionsByAccount(transactions, account_id)
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
  txnSelector,
  (accounts, transactions) => {
    return {
      accounts: accounts.map( acct => ({
        ...acct,
        balance: getTransactionsByAccount(transactions,acct.id)
                  .reduce((total,txn) => total + txn.amount, acct.openingBalance)
      })),
    }
  }
);
