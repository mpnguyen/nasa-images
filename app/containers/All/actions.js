/*
 *
 * All actions
 *
 */

import {
  SEARCH_IMAGES_REQUEST,
  SEARCH_IMAGES_SUCCESS,
  SEARCH_IMAGES_FAILURE,
} from './constants';

export function searchImagesRequest(text) {
  return {
    type: SEARCH_IMAGES_REQUEST,
    text,
  };
}

export function searchImagesSuccess(data) {
  return {
    type: SEARCH_IMAGES_SUCCESS,
    data,
  };
}

export function searchImagesFailure(error) {
  return {
    type: SEARCH_IMAGES_FAILURE,
    error,
  };
}
