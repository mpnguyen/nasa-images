/*
 *
 * All actions
 *
 */

import {
  SEARCH_IMAGES_REQUEST,
  SEARCH_IMAGES_SUCCESS,
  SEARCH_IMAGES_FAILURE,
  LIKE_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
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

export function likeItemRequest(href) {
  return {
    type: LIKE_ITEM,
    href,
  };
}

export function removeItemRequest(href) {
  return {
    type: REMOVE_ITEM,
    href,
  };
}

export function updateItemRequest(href, title, url) {
  return {
    type: UPDATE_ITEM,
    href,
    title,
    url,
  };
}
