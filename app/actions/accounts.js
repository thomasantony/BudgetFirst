import makeActionCreator from './makeActionCreator';

export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export const addAccount = makeActionCreator(ADD_ACCOUNT, 'payload')
export const updateAccount = makeActionCreator(UPDATE_ACCOUNT, 'id','payload')
export const deleteAccount = makeActionCreator(DELETE_ACCOUNT, 'id')
