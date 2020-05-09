/*
 *
 * All reducer
 *
 */
import produce from 'immer';
import {
  SEARCH_IMAGES_REQUEST,
  SEARCH_IMAGES_SUCCESS,
  SEARCH_IMAGES_FAILURE,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const allReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SEARCH_IMAGES_REQUEST:
        draft.isSearching = true;
        break;
      case SEARCH_IMAGES_SUCCESS:
        draft.isSearching = false;
        draft.data = action.data;
        break;
      case SEARCH_IMAGES_FAILURE:
        draft.isSearching = false;
        draft.error = action.error;
        break;
    }
  });

export default allReducer;
