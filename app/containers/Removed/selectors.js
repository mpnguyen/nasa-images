import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the removed state domain
 */

const selectRemovedDomain = state => state.removed || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Removed
 */

const makeSelectRemoved = () =>
  createSelector(
    selectRemovedDomain,
    substate => substate,
  );

export default makeSelectRemoved;
export { selectRemovedDomain };
