/*
 *
 * All actions
 *
 */

import { SHOW_SPINNER_REQUEST, HIDE_SPINNER_REQUEST } from './constants';

export function showSpinnerRequest() {
  return {
    type: SHOW_SPINNER_REQUEST,
  };
}

export function hideSpinnerRequest() {
  return {
    type: HIDE_SPINNER_REQUEST,
  };
}
