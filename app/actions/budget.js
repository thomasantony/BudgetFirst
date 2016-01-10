import makeActionCreator from './makeActionCreator';

export const ADD_BUDGET_CATEGORY = 'ADD_BUDGET_CATEGORY';
export const UPDATE_BUDGET_CATEGORY = 'UPDATE_BUDGET_CATEGORY';
export const DELETE_BUDGET_CATEGORY = 'DELETE_BUDGET_CATEGORY';

export const addBudgetPeriod = makeActionCreator(ADD_BUDGET_CATEGORY, 'payload','period')
export const updateBudgetPeriod = makeActionCreator(UPDATE_BUDGET_CATEGORY, 'period','category_id','payload')
export const deleteBudgetPeriod = makeActionCreator(DELETE_BUDGET_CATEGORY, 'period','category_id')
