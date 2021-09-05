import {combineReducers} from 'redux';
import {connectionReducer} from './connectionReducer';
import {productReducer} from './productDetailsReducer';
import {cartReducer} from './cartReducer';

const reducer = combineReducers({connectionReducer,productReducer,cartReducer});

export {reducer};