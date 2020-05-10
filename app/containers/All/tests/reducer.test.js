import produce from 'immer';
import allReducer, { sortData } from '../reducer';
import {
  searchImagesRequest,
  searchImagesSuccess,
  searchImagesFailure,
  likeItemRequest,
  removeItemRequest,
  updateItemRequest,
  sortItemsRequest,
} from '../actions';
import { mockData } from '../../../utils/tests/mockData';

/* eslint-disable default-case, no-param-reassign */
describe('allReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      isSearching: false,
      data: [],
      sortBy: 'Newest',
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(allReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the searchImagesRequest action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isSearching = true;
    });

    expect(allReducer(state, searchImagesRequest())).toEqual(expectedResult);
  });

  it('should handle the searchImagesSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isSearching = false;
      draft.data = sortData(mockData, state.sortBy);
    });

    expect(allReducer(state, searchImagesSuccess(mockData))).toEqual(
      expectedResult,
    );
  });

  it('should handle the searchImagesFailure action correctly', () => {
    const error = 'Something wrong';
    const expectedResult = produce(state, draft => {
      draft.isSearching = false;
      draft.error = error;
    });

    expect(allReducer(state, searchImagesFailure(error))).toEqual(
      expectedResult,
    );
  });

  it('should handle the likeItemRequest action correctly', () => {
    state.data = mockData;
    const expectedResult = produce(state, draft => {
      draft.data[0].isLiked = true;
    });

    expect(allReducer(state, likeItemRequest(mockData[0].href))).toEqual(
      expectedResult,
    );
  });

  it('should handle the removeItemRequest action correctly', () => {
    state.data = mockData;
    const expectedResult = produce(state, draft => {
      draft.data[0].isRemoved = true;
    });

    expect(allReducer(state, removeItemRequest(mockData[0].href))).toEqual(
      expectedResult,
    );
  });

  it('should handle the updateItemRequest action correctly', () => {
    state.data = mockData;
    const expectedResult = produce(state, draft => {
      draft.data[0].data[0].title = 'title';
      draft.data[0].links[0].href = 'url';
    });

    expect(
      allReducer(state, updateItemRequest(mockData[0].href, 'title', 'url')),
    ).toEqual(expectedResult);
  });

  it('should handle the sortItemsRequest action correctly', () => {
    state.data = mockData;
    const sortBy = 'A - Z';

    const expectedResult = produce(state, draft => {
      draft.data = sortData(state.data, sortBy);
      draft.sortBy = sortBy;
    });

    expect(allReducer(state, sortItemsRequest(sortBy))).toEqual(expectedResult);
  });
});
