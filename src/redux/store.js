//Redux modules
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducers from './reducers';

//Setup store and apply middleware 'logger'
const middleware = applyMiddleware(logger, thunk, promise());
const store = createStore(reducers, middleware);

export default store;
