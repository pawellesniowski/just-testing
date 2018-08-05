import { combineReducers } from 'redux';
import { commentsReducer } from './comments';
import { authReducer } from './auth.reducer';

export default combineReducers({
   comments: commentsReducer,
   loggedIn: authReducer
});