import { ADD_TRANSACTION, UPDATE_TRANSACTION, DELETE_TRANSACTION, LOAD_DUMMY_TRANSACTIONS } from '../actions/ledger';

export default function ledger(state = [], action) {
  switch (action.type) {
    case LOAD_DUMMY_TRANSACTIONS:
    // account_id : 1 -> checking
    // account_id : 2 -> visa
      return [
        // {'id','date','type','account','payee','memo','amount','cleared'}
        {
          id: 1,
          date: '2016-01-09',
          type: 'regular',
          account_id: 2,      // 'account' is a derived field
          payee: 'T-Mobile',
          // category_id: 2,     // TODO: Make category a derived field
          category: 'Phone/Internet',
          memo: 'Phone bill for Dec 2015',
          amount: -60.00,
          cleared: true
        },
        {
          id: 2,
          date: '2016-01-15',
          type: 'transfer',
          account_id: 2,      // 'account' is a derived field
          payee: 'Transfer: Checking Account <--',  // Later connect using account id
          // category_id: 2,     // TODO: Make category a derived field
          category: '',
          memo: '',
          amount: 60.00,
          cleared: true
        },
        {
          id: 3,
          date: '2016-01-15',
          type: 'transfer',
          account_id: 1,      // 'account' is a derived field
          payee: 'Transfer: Rewards VISA -->',
          // category_id: 2,     // TODO: Make category a derived field
          category: '',
          memo: '',
          amount: -60.00,
          cleared: true
        }
      ];
    case ADD_TRANSACTION:
      let new_id = state.reduce((maxId, txn) => Math.max(txn.id, maxId), 0) + 1;
      return [
        ...state,
        Object.assign({}, {
          id: new_id
        }, action.payload)
      ]
    case UPDATE_TRANSACTION:
      return state.map(txn => (txn.id == action.id) ? action.payload : txn);

    case DELETE_TRANSACTION:
      return state.filter(txn => txn.id != action.id);

    default:
      return state;
  }
}
