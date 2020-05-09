import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the all state domain
 */

const selectAllDomain = state => state.all || initialState;

/**
 * Other specific selectors
 */
const makeSelectData = () =>
  createSelector(
    selectAllDomain,
    substate => substate.data.filter(item => !item.isRemoved),
  );

/**
 * Default selector used by All
 */

const makeSelectAll = () =>
  createSelector(
    selectAllDomain,
    substate => substate,
  );

export default makeSelectAll;
export { selectAllDomain, makeSelectData };
