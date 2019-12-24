import {combineReducers} from 'redux'
import userReducer from '../../containers/auth/store/reducers'
const reducer = combineReducers({
    user: userReducer
});
export default reducer;
