import { combineReducers } from 'redux';
import shopReducer from './Shopping/shopping-reducer';
import depositReducer from './Deposit/deposit-reducer';

const rootReducer = combineReducers({
	deposit: depositReducer,
});
export default rootReducer;
