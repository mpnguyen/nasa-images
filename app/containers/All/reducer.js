/*
 *
 * All reducer
 *
 */
import produce from 'immer';
import findIndex from 'lodash/findIndex';
import {
  SEARCH_IMAGES_REQUEST,
  SEARCH_IMAGES_SUCCESS,
  SEARCH_IMAGES_FAILURE,
  LIKE_ITEM,
  REMOVE_ITEM,
} from './constants';

export const initialState = {
  isSearching: false,
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const allReducer = (state = initialState, action) =>
  produce(state, draft => {
    let index;

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
      case LIKE_ITEM:
        index = findIndex(draft.data, item => item.href === action.href);
        if (index >= 0) {
          draft.data[index].isLiked = !draft.data[index].isLiked;
        }
        break;
      case REMOVE_ITEM:
        index = findIndex(draft.data, item => item.href === action.href);
        if (index >= 0) {
          draft.data[index].isRemoved = !draft.data[index].isRemoved;
        }
        break;
    }
  });

export default allReducer;
