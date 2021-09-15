import { combineReducers } from 'redux';

import UsersReducer from './user';

const RootReducer = combineReducers({
    UsersReducer: UsersReducer
});

export default RootReducer;