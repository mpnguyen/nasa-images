/*
 *
 * ItemForm actions
 *
 */

import { SHOW_ITEM_FORM, HIDE_ITEM_FORM } from './constants';

export function showItemFormRequest(item) {
  return {
    type: SHOW_ITEM_FORM,
    item,
  };
}

export function hideItemFormRequest() {
  return {
    type: HIDE_ITEM_FORM,
  };
}
