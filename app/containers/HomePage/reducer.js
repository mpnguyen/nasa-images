/*
 *
 * All reducer
 *
 */
import produce from 'immer';
import { SHOW_SPINNER_REQUEST, HIDE_SPINNER_REQUEST } from './constants';

export const initialState = {
  isSpinnerVisible: false,
};

/* eslint-disable default-case, no-param-reassign */
const allReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SHOW_SPINNER_REQUEST:
        draft.isSpinnerVisible = true;
        break;
      case HIDE_SPINNER_REQUEST:
        draft.isSpinnerVisible = false;
        break;
    }
  });

export default allReducer;
