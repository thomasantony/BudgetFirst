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
    // type is set to 'transfer' for transfers and creates a second entry automatically?
    // not really sure about that part yet
    {'id','date','type','account','payee','memo','amount','cleared'}
  ],
  // type = ['credit-card','checking','savings','loan','auto-loan','asset']
  accounts : [

    {'id','name','openingDate','openingBalance','onBudget','type'}
  ],
  master_categories: [

  ],
  categories: [
    {'id','parent_id','name','hidden'}
  ],
  budget: [
      // Derive category_balance and outflows from ledger
      {'period','category_id','budgeted','notes'}
  ]
}
*/
