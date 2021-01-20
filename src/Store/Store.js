import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';

import ObjectsReducer from './Reducers/ObjectsReducer';
import FavouritesReducer from './Reducers/FavouritesReducer';

const rootReducer = combineReducers({
  objects: ObjectsReducer,
  favourites: FavouritesReducer,
});

const store = createStore(
  rootReducer,
  load({ states: ['favourites'] }),
  compose(
    applyMiddleware(thunk, save({ states: ['favourites'], debounce: 1000 })),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
