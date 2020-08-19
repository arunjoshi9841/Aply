import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import userReducer from './user.reducer'
import homeReducer from './home.reducer'
import dashboardReducer from "./dashboard.reducer"

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  home: homeReducer,
  dashboard: dashboardReducer
});
export default rootReducer;
