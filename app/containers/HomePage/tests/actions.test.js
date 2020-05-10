import { showSpinnerRequest, hideSpinnerRequest } from '../actions';
import { SHOW_SPINNER_REQUEST, HIDE_SPINNER_REQUEST } from '../constants';

describe('ItemForm actions', () => {
  describe('showSpinnerRequest', () => {
    it('has a type of SHOW_SPINNER_REQUEST', () => {
      const expected = {
        type: SHOW_SPINNER_REQUEST,
      };
      expect(showSpinnerRequest()).toEqual(expected);
    });
  });

  describe('hideSpinnerRequest', () => {
    it('has a type of HIDE_SPINNER_REQUEST', () => {
      const expected = {
        type: HIDE_SPINNER_REQUEST,
      };
      expect(hideSpinnerRequest()).toEqual(expected);
    });
  });
});
