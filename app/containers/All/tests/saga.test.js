/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';
// import * as baseApi from '../../../services/baseApi';

import { SEARCH_IMAGES_REQUEST } from '../constants';
import { searchImagesSuccess, searchImagesFailure } from '../actions';
import allSaga, { searchImagesRequestSaga } from '../saga';
import { mockData } from '../../../utils/tests/mockData';
import { showSpinnerRequest, hideSpinnerRequest } from '../../HomePage/actions';

/* eslint-disable redux-saga/yield-effects */
describe('all Saga', () => {
  let searchImagesGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    searchImagesGenerator = searchImagesRequestSaga({ text: 'search txt' });
  });

  it('should dispatch the searchImagesSuccess action if it requests the data successfully', () => {
    const response = { collection: { items: mockData } };
    const putShowSpinnerRequest = searchImagesGenerator.next().value;
    expect(putShowSpinnerRequest).toEqual(put(showSpinnerRequest()));

    searchImagesGenerator.next();

    const putSearchImages = searchImagesGenerator.next(response).value;
    expect(putSearchImages).toEqual(put(searchImagesSuccess(mockData)));

    const putHideSpinnerRequest = searchImagesGenerator.next().value;
    expect(putHideSpinnerRequest).toEqual(put(hideSpinnerRequest()));
  });

  it('should call the searchImagesFailure action if the response errors', () => {
    const response = 'Some error';

    const putShowSpinnerRequest = searchImagesGenerator.next().value;
    expect(putShowSpinnerRequest).toEqual(put(showSpinnerRequest()));
    searchImagesGenerator.next();

    const putSearchImages = searchImagesGenerator.throw(response).value;
    expect(putSearchImages).toEqual(put(searchImagesFailure(response)));

    const putHideSpinnerRequest = searchImagesGenerator.next().value;
    expect(putHideSpinnerRequest).toEqual(put(hideSpinnerRequest()));
  });
});

describe('allSaga Saga', () => {
  const allSagaGenerator = allSaga();

  it('should start task to watch for SEARCH_IMAGES_REQUEST action', () => {
    const takeLatestSearchImage = allSagaGenerator.next().value;
    expect(takeLatestSearchImage).toEqual(
      takeLatest(SEARCH_IMAGES_REQUEST, searchImagesRequestSaga),
    );
  });
});
