import registeredReducer from './registeredReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	registeredReducer: registeredReducer,
});

export default rootReducer;
