import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './Reducers/index';

const store = createStore(reducer,applyMiddleware(thunk));

export {store};