import { createSelector } from 'reselect';
import { initialState } from '../All/reducer';

/**
 * Direct selector to the removed state domain
 */

const selectRemovedDomain = state => state.all || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Removed
 */

const makeSelectRemovedData = () =>
  createSelector(
    selectRemovedDomain,
    substate => substate.data.filter(item => item.isRemoved),
  );

export default makeSelectRemovedData;
export { selectRemovedDomain };
