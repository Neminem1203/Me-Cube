import {combineReducers} from "redux";
import usersReducer from "./users_reducer";
import videosReducer from "./videos_reducer";
import commentReducer from "./comment_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    comments: commentReducer,
});
export default entitiesReducer;