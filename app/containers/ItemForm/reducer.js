/*
 *
 * ItemForm reducer
 *
 */
import produce from 'immer';
import { SHOW_ITEM_FORM, HIDE_ITEM_FORM } from './constants';

export const initialState = {
  isVisible: false,
  currentItem: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const itemFormReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SHOW_ITEM_FORM:
        draft.isVisible = true;
        draft.currentItem = action.item;
        break;
      case HIDE_ITEM_FORM:
        draft.isVisible = false;
        draft.currentItem = undefined;
        break;
    }
  });

export default itemFormReducer;
