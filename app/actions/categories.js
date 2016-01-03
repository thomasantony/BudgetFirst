export const CATEGORY_INSERT = 'CATEGORY_INSERT';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DELETE = 'CATEGORY_DELETE';

export function insertCategory(category) {
  return {
    type: CATEGORY_INSERT,
    category
  };
}

export function updateCategory(category) {
  return {
    type: CATEGORY_UPDATE,
    category
  };
}

export function deleteCategory(id) {
  return {
    type: CATEGORY_DELETE,
    id
  };
}
