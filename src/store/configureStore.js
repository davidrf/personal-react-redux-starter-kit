import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import DevTools from 'containers/DevTools';
import rootReducer from 'reducers';

let composeFunctions = [applyMiddleware(thunkMiddleware)];
// eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  composeFunctions.push(DevTools.instrument());
}

let configureStore = preloadedState => {
  let store = createStore(
    rootReducer,
    preloadedState,
    compose(...composeFunctions)
  );

  return store
};

export default configureStore;
