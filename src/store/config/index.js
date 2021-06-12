import { applyMiddleware, createStore } from 'redux';
import reduxlogger from 'redux-logger';

import reducer from './entities';

export const store = createStore(reducer, applyMiddleware(reduxlogger));
