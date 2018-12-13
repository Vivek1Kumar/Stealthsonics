import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import shippingReducer from './shippingReducer';

export default combineReducers({
	auth:authReducer,
	errors: errorReducer,
	profile: profileReducer,
	shipping: shippingReducer
});