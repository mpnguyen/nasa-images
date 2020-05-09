import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the liked state domain
 */

const selectLikedDomain = state => state.liked || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Liked
 */

const makeSelectLiked = () =>
  createSelector(
    selectLikedDomain,
    substate => substate,
  );

export default makeSelectLiked;
export { selectLikedDomain };
