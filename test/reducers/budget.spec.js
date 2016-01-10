import { expect } from 'chai';
import budget from '../../app/reducers/budget';
import { ADD_BUDGET_CATEGORY, UPDATE_BUDGET_CATEGORY, DELETE_BUDGET_CATEGORY } from '../../app/actions/budget';

describe('reducers', () => {
  describe('budget', () => {
    it('should handle initial state', () => {
      expect(
        budget(undefined, {})
      ).to.deep.equal({});
    });
    let sample_period_1 = {
      '012016': [{
        category_id: 1,
        budgeted: 100.00,
        notes: 'notes jan 2016'
      }]
    };
    let sample_period_2 = {
      '012016': [{
        category_id: 1,
        budgeted: 100.00,
        notes: 'notes jan 2016'
      }],
      '022016': [{
        category_id: 1,
        budgeted: 200.00,
        notes: 'notes feb 2016'
      }],
    };
    // test action for adding budget period
    it('should handle ADD_BUDGET_CATEGORY with empty state', () => {
      expect(
        budget({}, {
          type: ADD_BUDGET_CATEGORY,
          period: '012016',
          payload: {
            category_id: 1,
            budgeted: 100.00,
            notes: 'notes jan 2016'
          }
        })
      ).to.deep.equal(sample_period_1);
    })
    it('should handle ADD_BUDGET_CATEGORY with non-empty state', () => {
      expect(
        budget(sample_period_1, {
          type: ADD_BUDGET_CATEGORY,
          period: '022016',
          payload: {
            category_id: 1,
            budgeted: 200.00,
            notes: 'notes feb 2016'
          }
        })
      ).to.deep.equal(sample_period_2);
    })
    // Update budget period
    it('should handle UPDATE_BUDGET_CATEGORY', () => {
      expect(
        budget(sample_period_1, {
          type: UPDATE_BUDGET_CATEGORY,
          period: '012016',
          category_id: 1,
          payload: {
            category_id: 1,
            budgeted: 150.00,
            notes: 'notes jan 2016'
          }
        })
      ).to.deep.equal({
        '012016': [{
          category_id: 1,
          budgeted: 150.00,
          notes: 'notes jan 2016'
        }]
      });
    });
    // Delete state variable
    it('should handle DELETE_BUDGET_CATEGORY', () => {
      expect(
        budget(sample_period_1, {
          type: DELETE_BUDGET_CATEGORY,
          period: '012016',
          category_id: 1
        })
      ).to.deep.equal({
        '012016': []
      });
    });
    it('should handle unknown action type', () => {
      expect(budget({}, {
        type: 'unknown'
      })).to.deep.equal({});
    });
  });
});
