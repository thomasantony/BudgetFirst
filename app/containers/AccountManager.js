import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import * as CategoryActions from '../actions/categories';

// Attempt using reselect
import { createSelector } from 'reselect'

const plainCategorySelector = state => state.categories

const categorySelector = createSelector(
  plainCategorySelector,
  (plainCategories) => {
    return {
      categories: plainCategories.map( cat => ({
                    ...cat,
                    _parent: cat.parent_id > 0 ? plainCategories.find(c => c._id == cat.parent_id).name : ''
                  })),
    }
  }
);
function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CategoryActions, dispatch);
}

export default connect(categorySelector, mapDispatchToProps)(Categories);
