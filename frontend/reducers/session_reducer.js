import { combineReducers } from "redux";
import UserReducer from "./session_user_reducer";
import UserLikeReducer from "./session_liked_reducer";
import UserDislikeReducer from "./session_disliked_reducer";

const sessionReducer = combineReducers({
    userId: UserReducer,
    likedComments: UserLikeReducer,
    dislikedComments: UserDislikeReducer
});
export default sessionReducer;