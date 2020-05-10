/*
 *
 * All reducer
 *
 */
import produce from 'immer';
import findIndex from 'lodash/findIndex';
import sortBy from 'lodash/sortBy';
import {
  SEARCH_IMAGES_REQUEST,
  SEARCH_IMAGES_SUCCESS,
  SEARCH_IMAGES_FAILURE,
  LIKE_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  SORT_ITEMS,
} from './constants';

export const initialState = {
  isSearching: false,
  data: [],
  sortBy: 'Newest',
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
        draft.data = sortData(action.data, state.sortBy);
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
      case UPDATE_ITEM:
        index = findIndex(draft.data, item => item.href === action.href);
        if (index >= 0) {
          draft.data[index].data[0].title = action.title;
          draft.data[index].links[0].href = action.url;
        }
        break;
      case SORT_ITEMS:
        draft.data = sortData(state.data, action.sortBy);
        draft.sortBy = action.sortBy;
        break;
    }
  });

const sortData = (data, sort) => {
  switch (sort) {
    case 'Newest':
      return sortBy(data, item => item.data[0].date_created).reverse();
    case 'Oldest':
      return sortBy(data, item => item.data[0].date_created);
    case 'A - Z':
      return sortBy(data, item => item.data[0].title);
    case 'Z - A':
      return sortBy(data, item => item.data[0].title).reverse();
  }
  return [];
};

export default allReducer;
