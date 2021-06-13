import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reduxlogger from 'redux-logger';

import reducer from './entities';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') middlewares.push(reduxlogger);

export const store = createStore(reducer, applyMiddleware(...middlewares));
