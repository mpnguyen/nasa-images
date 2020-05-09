/*
 *
 * All actions
 *
 */

import { SHOW_SPINNER_REQUEST, HIDE_SPINNER_REQUEST } from './constants';

export function showSpinnerRequest(text) {
  return {
    type: SHOW_SPINNER_REQUEST,
    text,
  };
}

export function hideSpinnerRequest(data) {
  return {
    type: HIDE_SPINNER_REQUEST,
    data,
  };
}
