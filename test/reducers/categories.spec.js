import { expect } from 'chai';
import categories from '../../app/reducers/categories';
import { ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../../app/actions/categories';

describe('categories reducer', () => {
  it('should handle initial state', () => {
    expect(
      categories(undefined, {})
    ).to.deep.equal([]);
  });

  it('should handle unknown action type', () => {
    expect(categories([], {
      type: 'unknown'
    })).to.deep.equal([]);
  });
  // TODO: Implement tests for category hierarchies
  let sample_cat_1 = {
    id: 1,
    parent_id: 0,
    name: 'Rainy Day Funds',
    hidden: false
  };
  let sample_cat_2 = {
    id: 2,
    parent_id: 0,
    name: 'Emergency Fund',
    hidden: false
  };
  // test action for adding categories
  it('should handle ADD_CATEGORY with empty state', () => {
    expect(
      categories([], {
        type: ADD_CATEGORY,
        payload: sample_cat_1
      })
    ).to.deep.equal([sample_cat_1]);
  })
  it('should handle ADD_CATEGORY with non-empty state', () => {
    expect(
      categories([sample_cat_1], {
        type: ADD_CATEGORY,
        payload: sample_cat_2
      })
    ).to.deep.equal([sample_cat_1, sample_cat_2]);
  })
  // Update categories
  it('should handle UPDATE_CATEGORY with one account in state', () => {
    expect(
      categories([sample_cat_1], {
        type: UPDATE_CATEGORY,
        id: 1,
        payload: {
          ...sample_cat_2,
          id: 1
        }
      })
    ).to.deep.equal([
      {
        ...sample_cat_2,
        id: 1
      }
    ]);
  });
  it('should handle UPDATE_CATEGORY with two categories in state', () => {
    expect(
      categories([sample_cat_1,sample_cat_2], {
        type: UPDATE_CATEGORY,
        id: 1,
        payload: {
          ...sample_cat_2,
          id: 1
        }
      })
    ).to.deep.equal([
      {
        ...sample_cat_2,
        id: 1
      }, sample_cat_2
    ]);
  });
  // Delete state variable
  it('should handle DELETE_CATEGORY with one account in state', () => {
    expect(
      categories([sample_cat_1], {
        type: DELETE_CATEGORY,
        id: 1
      })
    ).to.deep.equal([]);
  });
  it('should handle DELETE_CATEGORY with two categories in state', () => {
    expect(
      categories([sample_cat_1,sample_cat_2], {
        type: DELETE_CATEGORY,
        id: 2
      })
    ).to.deep.equal([sample_cat_1]);
  });
});
