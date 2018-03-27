//Redux modules
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import reducers from 'app/reducers';

//Setup store and apply middleware 'logger'
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

export default store;
