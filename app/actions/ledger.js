import makeActionCreator from './makeActionCreator';

export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';

export const addTransaction = makeActionCreator(ADD_TRANSACTION, 'payload')
export const updateTransaction = makeActionCreator(UPDATE_TRANSACTION, 'id','payload')
export const deleteTransaction = makeActionCreator(DELETE_TRANSACTION, 'id')
