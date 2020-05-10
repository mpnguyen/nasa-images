import { showItemFormRequest, hideItemFormRequest } from '../actions';
import { SHOW_ITEM_FORM, HIDE_ITEM_FORM } from '../constants';

describe('ItemForm actions', () => {
  describe('showItemFormRequest', () => {
    it('has a type of SHOW_ITEM_FORM', () => {
      const expected = {
        type: SHOW_ITEM_FORM,
      };
      expect(showItemFormRequest()).toEqual(expected);
    });
  });

  describe('hideItemFormRequest', () => {
    it('has a type of HIDE_ITEM_FORM', () => {
      const expected = {
        type: HIDE_ITEM_FORM,
      };
      expect(hideItemFormRequest()).toEqual(expected);
    });
  });
});
