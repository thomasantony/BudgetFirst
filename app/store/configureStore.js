if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.production');
} else {
  module.exports = require('./configureStore.development');
}


/*
State tree shape

state: {
  ledger: [
    // To can also be account name for type:transfer
    // Negative amount = outflow, Positive amount = inflow
    // type is set to 'transfer' for transfers and creates a second entry automaticlaly
    {'id','date','account','payee','memo','type','amount','cleared'}
  ],
  accounts : [
    {'id','name','openingDate','openingBalance','onBudget','type'}
  ],
  master_categories: [

  ],
  categories: [
    {'id','parent_id','name'}
  ],
  budget: {
    'Jan-2016': [
      // Derive category_balance and outflows from ledger
      {'category_id','hidden','budgeted'}
    ]
  }
}
*/
