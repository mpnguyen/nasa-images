import produce from 'immer';
import itemFormReducer from '../reducer';
import { showItemFormRequest, hideItemFormRequest } from '../actions';
import { mockData } from '../../../utils/tests/mockData';

/* eslint-disable default-case, no-param-reassign */
describe('itemFormReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      // default state params here
      isVisible: false,
      currentItem: undefined,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(itemFormReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the showItemFormRequest action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isVisible = true;
      // eslint-disable-next-line prefer-destructuring
      draft.currentItem = mockData[0];
    });

    expect(itemFormReducer(state, showItemFormRequest(mockData[0]))).toEqual(
      expectedResult,
    );
  });

  it('should handle the hideItemFormRequest action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isVisible = false;
      // eslint-disable-next-line prefer-destructuring
      draft.currentIten = undefined;
    });

    expect(itemFormReducer(state, hideItemFormRequest(mockData[0]))).toEqual(
      expectedResult,
    );
  });
});
