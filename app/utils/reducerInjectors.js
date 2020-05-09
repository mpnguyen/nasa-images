import invariant from 'invariant';
import { isEmpty, isFunction, isString } from 'lodash';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import checkStore from './checkStore';
import createReducer from '../reducers';

export function injectReducerFactory(store, isValid) {
  return function injectReducer(key, reducer) {
    if (!isValid) checkStore(store);

    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      '(app/utils...) injectReducer: Expected `reducer` to be a reducer function',
    );

    // Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different
    if (
      Reflect.has(store.injectedReducers, key) &&
      store.injectedReducers[key] === reducer
    )
      return;

    store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign

    // config redux persist
    const persistConfig = {
      key: 'root',
      whitelist: ['all'],
      storage,
    };

    store.replaceReducer(
      persistReducer(persistConfig, createReducer(store.injectedReducers)),
    );

    const persistor = persistStore(store);
    persistor.persist();
  };
}

export default function getInjectors(store) {
  checkStore(store);

  return {
    injectReducer: injectReducerFactory(store, true),
  };
}
