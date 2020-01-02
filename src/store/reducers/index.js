import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import userReducer from './user.reducer'
import homeReducer from './home.reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  home: homeReducer,
});
export default rootReducer;
