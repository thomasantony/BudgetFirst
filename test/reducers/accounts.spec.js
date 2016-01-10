import { expect } from 'chai';
import accounts from '../../app/reducers/accounts';
import { ADD_ACCOUNT, UPDATE_ACCOUNT, DELETE_ACCOUNT } from '../../app/actions/accounts';

describe('reducers', () => {
  describe('accounts', () => {
    it('should handle initial state', () => {
      expect(
        accounts(undefined, {})
      ).to.deep.equal([]);
    });
    let sample_acct_1 = {
      id: 1,
      name: 'My Checking',
      openingDate:'01-01-2016',
      openingBalance:0.00,
      on_budget:true,
      type: 'checking'
    };
    let sample_acct_2 = {
      id: 2,
      name: 'My credit card',
      openingDate:'01-01-2016',
      openingBalance:0.00,
      on_budget:true,
      type: 'credit-card'
    };
    // test action for adding accounts
    it('should handle ADD_ACCOUNT with empty state', () => {
      expect(
        accounts([], {
          type: ADD_ACCOUNT,
          payload: sample_acct_1
        })
      ).to.deep.equal([sample_acct_1]);
    })
    it('should handle ADD_ACCOUNT with non-empty state', () => {
      expect(
        accounts([sample_acct_1], {
          type: ADD_ACCOUNT,
          payload: sample_acct_2
        })
      ).to.deep.equal([sample_acct_1, sample_acct_2]);
    })
    // Update accounts
    it('should handle UPDATE_ACCOUNT with one account in state', () => {
      expect(
        accounts([sample_acct_1], {
          type: UPDATE_ACCOUNT,
          id: 1,
          payload: {
            ...sample_acct_2,
            id: 1
          }
        })
      ).to.deep.equal([
        {
          ...sample_acct_2,
          id: 1
        }
      ]);
    });
    it('should handle UPDATE_ACCOUNT with two accounts in state', () => {
      expect(
        accounts([sample_acct_1,sample_acct_2], {
          type: UPDATE_ACCOUNT,
          id: 1,
          payload: {
            ...sample_acct_2,
            id: 1
          }
        })
      ).to.deep.equal([
        {
          ...sample_acct_2,
          id: 1
        }, sample_acct_2
      ]);
    });
    // Delete state variable
    it('should handle DELETE_ACCOUNT with one account', () => {
      expect(
        accounts([sample_acct_1], {
          type: DELETE_ACCOUNT,
          id: 1
        })
      ).to.deep.equal([]);
    });
    it('should handle DELETE_ACCOUNT with two accounts', () => {
      expect(
        accounts([sample_acct_1,sample_acct_2], {
          type: DELETE_ACCOUNT,
          id: 2
        })
      ).to.deep.equal([sample_acct_1]);
    });
    it('should handle unknown action type', () => {
      expect(accounts([], {
        type: 'unknown'
      })).to.deep.equal([]);
    });
  });
});
