import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';

import objectsReducer from './Reducers/ObjectsReducer';
import favouritesReducer from './Reducers/FavouritesReducer';
import bidsReducer from './Reducers/BidsReducer';

const rootReducer = combineReducers({
  objects: objectsReducer,
  favourites: favouritesReducer,
  bids: bidsReducer,
});

const store = createStore(
  rootReducer,
  load({ states: ['favourites'] }),
  compose(
    applyMiddleware(thunk, save({ states: ['favourites'], debounce: 1000 })),
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
