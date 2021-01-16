import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ObjectsReducer from './Reducers/ObjectsReducer';

const store = createStore(ObjectsReducer, applyMiddleware(thunk));

export default store;
