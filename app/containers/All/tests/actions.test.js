import {
  searchImagesRequest,
  searchImagesSuccess,
  searchImagesFailure,
  likeItemRequest,
  removeItemRequest,
  updateItemRequest,
  sortItemsRequest,
} from '../actions';
import {
  SEARCH_IMAGES_REQUEST,
  SEARCH_IMAGES_SUCCESS,
  SEARCH_IMAGES_FAILURE,
  LIKE_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  SORT_ITEMS,
} from '../constants';
import { mockData } from '../../../utils/tests/mockData';

describe('All actions', () => {
  describe('searchImagesRequest', () => {
    it('has a type of SEARCH_IMAGES_REQUEST and payload', () => {
      const text = 'moon';
      const expected = {
        type: SEARCH_IMAGES_REQUEST,
        text,
      };
      expect(searchImagesRequest(text)).toEqual(expected);
    });
  });

  describe('searchImagesSuccess', () => {
    it('has a type of SEARCH_IMAGES_SUCCESS and payload', () => {
      const expected = {
        type: SEARCH_IMAGES_SUCCESS,
        data: mockData,
      };
      expect(searchImagesSuccess(mockData)).toEqual(expected);
    });
  });

  describe('searchImagesFailure', () => {
    it('has a type of SEARCH_IMAGES_FAILURE and payload', () => {
      const err = 'Something wrong';
      const expected = {
        type: SEARCH_IMAGES_FAILURE,
        error: err,
      };
      expect(searchImagesFailure(err)).toEqual(expected);
    });
  });

  describe('likeItemRequest', () => {
    it('has a type of LIKE_ITEM and payload', () => {
      const expected = {
        type: LIKE_ITEM,
        href: mockData[0].href,
      };
      expect(likeItemRequest(mockData[0].href)).toEqual(expected);
    });
  });

  describe('removeItemRequest', () => {
    it('has a type of REMOVE_ITEM and payload', () => {
      const expected = {
        type: REMOVE_ITEM,
        href: mockData[0].href,
      };
      expect(removeItemRequest(mockData[0].href)).toEqual(expected);
    });
  });

  describe('updateItemRequest', () => {
    it('has a type of UPDATE_ITEM and payload', () => {
      const expected = {
        type: UPDATE_ITEM,
        href: mockData[0].href,
        title: 'update',
        url: 'update',
      };
      expect(updateItemRequest(mockData[0].href, 'update', 'update')).toEqual(
        expected,
      );
    });
  });

  describe('sortItemsRequest', () => {
    it('has a type of SORT_ITEMS and payload', () => {
      const sortBy = 'A - Z';
      const expected = {
        type: SORT_ITEMS,
        sortBy,
      };
      expect(sortItemsRequest(sortBy)).toEqual(expected);
    });
  });
});
