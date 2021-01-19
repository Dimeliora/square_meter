import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import ObjectsReducer from './Reducers/ObjectsReducer';

const store = createStore(
  ObjectsReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
