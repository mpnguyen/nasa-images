import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the itemForm state domain
 */

const selectItemFormDomain = state => state.itemForm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ItemForm
 */

const makeSelectItemForm = () =>
  createSelector(
    selectItemFormDomain,
    substate => substate,
  );

export default makeSelectItemForm;
export { selectItemFormDomain };
