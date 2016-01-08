import makeActionCreator from './makeActionCreator';

export const ADD_BUDGET_CATEGORY = 'ADD_BUDGET_CATEGORY';
export const UPDATE_BUDGET_CATEGORY = 'UPDATE_BUDGET_CATEGORY';
export const DELETE_BUDGET_CATEGORY = 'DELETE_BUDGET_CATEGORY';

export const addBudgetCategory = makeActionCreator(ADD_BUDGET_CATEGORY, 'payload')
export const updateBudgetCategory = makeActionCreator(UPDATE_BUDGET_CATEGORY, 'id','payload')
export const deleteBudgetCategory = makeActionCreator(DELETE_BUDGET_CATEGORY, 'id')
