import { combineReducers } from "redux";
import errorUserReducer from "./error_user_reducer";

const errorReducer = combineReducers({
    user: errorUserReducer
});

export default errorReducer;