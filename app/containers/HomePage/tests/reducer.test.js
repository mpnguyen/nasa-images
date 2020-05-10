import produce from 'immer';
import itemFormReducer from '../reducer';
import { showSpinnerRequest, hideSpinnerRequest } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('itemFormReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      // default state params here
      isSpinnerVisible: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(itemFormReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the showSpinnerRequest action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isSpinnerVisible = true;
    });

    expect(itemFormReducer(state, showSpinnerRequest())).toEqual(
      expectedResult,
    );
  });

  it('should handle the hideSpinnerRequest action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isSpinnerVisible = false;
    });

    expect(itemFormReducer(state, hideSpinnerRequest())).toEqual(
      expectedResult,
    );
  });
});
