import {combineReducers} from "redux";
import UserReducer from "./session_user_reducer";

const sessionReducer = combineReducers({
    userId: UserReducer
});
export default sessionReducer;