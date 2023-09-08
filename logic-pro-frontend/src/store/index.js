// src/store/index.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import orderReducer from './reducers/orderReducer';
import routeReducer from './reducers/routeReducer';
import inventoryReducer from './reducers/inventoryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  order: orderReducer,
  route: routeReducer,
  inventory: inventoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
