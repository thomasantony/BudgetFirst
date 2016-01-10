import { expect } from 'chai';
import budget from '../../app/reducers/budget';
import { ADD_BUDGET_CATEGORY, UPDATE_BUDGET_CATEGORY, DELETE_BUDGET_CATEGORY } from '../../app/actions/budget';

describe('budget reducer', () => {
  it('should handle initial state', () => {
    expect(
      budget(undefined, {})
    ).to.deep.equal([]);
  });
  it('should handle unknown action type', () => {
    expect(budget([], {
      type: 'unknown'
    })).to.deep.equal([]);
  });

  let sample_cat_1a = {
      period: '012016',
      category_id: 1,
      budgeted: 100.00,
      notes: 'notes jan 2016'
  };
  let sample_cat_1b = {
      period: '012016',
      category_id: 2,
      budgeted: 150.00,
      notes: 'notes jan 2016 cat 2'
  };
  let sample_cat_2a = {
      period: '022016',
      category_id: 1,
      budgeted: 200.00,
      notes: 'notes feb 2016'
  };

  // test action for adding budget category
  it('should handle ADD_BUDGET_CATEGORY with empty state', () => {
    expect(
      budget({}, {
        type: ADD_BUDGET_CATEGORY,
        payload: sample_cat_1a
      })
    ).to.deep.equal([sample_cat_1a]);
  })
  it('should handle ADD_BUDGET_CATEGORY with non-empty state', () => {
    expect(
      budget([sample_cat_1a], {
        type: ADD_BUDGET_CATEGORY,
        payload: sample_cat_2a
      })
    ).to.deep.equal([sample_cat_1a,sample_cat_2a]);
  })

  // Update budget category
  it('should handle UPDATE_BUDGET_CATEGORY with one period', () => {
    expect(
      budget([sample_cat_1a], {
        type: UPDATE_BUDGET_CATEGORY,
        period: '012016',
        category_id: 1,
        payload: sample_cat_1b
      })
    ).to.deep.equal([sample_cat_1b]);
  });
  it('should handle UPDATE_BUDGET_CATEGORY with multiple periods', () => {
    expect(
      budget([sample_cat_1a,sample_cat_2a], {
        type: UPDATE_BUDGET_CATEGORY,
        period: '012016',
        category_id: 1,
        payload: sample_cat_1b
      })
    ).to.deep.equal([sample_cat_1b,sample_cat_2a]);
  });


  // Delete budget category
  it('should handle DELETE_BUDGET_CATEGORY with one period', () => {
    expect(
      budget([sample_cat_1a], {
        type: DELETE_BUDGET_CATEGORY,
        period: '012016',
        category_id: 1
      })
    ).to.deep.equal([]);
  });
  it('should handle DELETE_BUDGET_CATEGORY with multiple periods', () => {
    expect(
      budget([sample_cat_1a,sample_cat_1b,sample_cat_2a], {
        type: DELETE_BUDGET_CATEGORY,
        period: '022016',
        category_id: 1
      })
    ).to.deep.equal([sample_cat_1a,sample_cat_1b]);
  });
});
