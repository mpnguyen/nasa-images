import { takeLatest, call, put } from 'redux-saga/effects';
import { get } from 'lodash';
import * as baseApi from 'services/baseApi';
import { SEARCH_IMAGES_REQUEST } from './constants';
import { searchImagesSuccess, searchImagesFailure } from './actions';
import { showSpinnerRequest, hideSpinnerRequest } from '../HomePage/actions';

// Individual exports for testing
export default function* allSaga() {
  yield takeLatest(SEARCH_IMAGES_REQUEST, searchImagesRequestSaga);
}

export function* searchImagesRequestSaga({ text }) {
  try {
    yield put(showSpinnerRequest());
    const data = yield call(baseApi.searchImages, text);
    yield put(searchImagesSuccess(get(data, ['collection', 'items'])));
    yield put(hideSpinnerRequest());
  } catch (error) {
    yield put(searchImagesFailure(error));
    yield put(hideSpinnerRequest());
  }
}
