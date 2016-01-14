import { ADD_ACCOUNT, UPDATE_ACCOUNT, DELETE_ACCOUNT, LOAD_DUMMY_ACCOUNTS } from '../actions/accounts';
import lodash from 'lodash';

export default function accounts(state = [], action) {
  switch (action.type) {
    case LOAD_DUMMY_ACCOUNTS:
      return [
        {
          id: 1,
          name: 'My Checking',
          type: 'checking',
          openingDate: '2016-01-01',
          openingBalance: 1000.00,
          onBudget: true
        },
        {
          id: 2,
          name: 'Rewards VISA',
          type: 'creditCard',
          openingDate: '2016-01-01',
          openingBalance: 0.00,
          onBudget: true
        },
        {
          id: 3,
          name: 'Auto loan',
          type: 'autoLoan',
          openingDate: '2016-01-01',
          openingBalance: -5000.00,
          onBudget: false
        }
      ];
    case ADD_ACCOUNT:
      let new_id = state.reduce((maxId, account) => Math.max(account.id, maxId), 0) + 1;
      return [
        ...state,
        Object.assign({}, {
          id: new_id
        }, action.payload)
      ]
    case UPDATE_ACCOUNT:
      return state.map(acct => (acct.id == action.id) ? action.payload : acct);

    case DELETE_ACCOUNT:
      return state.filter(acct => acct.id != action.id);
    default:
      return state;
  }
}
