import { createSelector } from 'reselect';
import { initialState } from '../All/reducer';

/**
 * Direct selector to the liked state domain
 */

const selectLikedDomain = state => state.all || initialState;

/**
 * Other specific selectors
 */

const makeSelectLikedData = () =>
  createSelector(
    selectLikedDomain,
    substate => substate.data.filter(item => item.isLiked && !item.isRemoved),
  );

export default makeSelectLikedData;
export { selectLikedDomain };
