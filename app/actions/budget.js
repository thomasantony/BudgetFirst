import makeActionCreator from './makeActionCreator';

export const ADD_BUDGET_PERIOD = 'ADD_BUDGET_PERIOD';
export const UPDATE_BUDGET_PERIOD = 'UPDATE_BUDGET_PERIOD';
export const DELETE_BUDGET_PERIOD = 'DELETE_BUDGET_PERIOD';

export const addBudgetPeriod = makeActionCreator(ADD_BUDGET_PERIOD, 'payload','period')
export const updateBudgetPeriod = makeActionCreator(UPDATE_BUDGET_PERIOD, 'period','id','payload')
export const deleteBudgetPeriod = makeActionCreator(DELETE_BUDGET_PERIOD, 'period','id')
