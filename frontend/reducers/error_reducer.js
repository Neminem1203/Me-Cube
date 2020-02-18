import { combineReducers } from "redux";
import errorUserReducer from "./error_user_reducer";
import errorVideoReducer from "./error_video_reducer";

const errorReducer = combineReducers({
    user: errorUserReducer,
    video: errorVideoReducer
});

export default errorReducer;