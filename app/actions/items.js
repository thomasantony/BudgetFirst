export const INSERT_ITEM = 'INSERT_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export function insertItem(item) {
  return {
    type: INSERT_ITEM,
    item
  };
}

export function updateItem(item) {
  return {
    type: UPDATE_ITEM,
    item
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id
  };
}
