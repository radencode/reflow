//Modules
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
//import thunk from 'redux-thunk';
//Reducers
import reducer from 'reducers/reducer';

const middleware = applyMiddleware(createLogger());

export default createStore(reducer, middleware);
