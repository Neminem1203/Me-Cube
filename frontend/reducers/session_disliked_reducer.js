import { LOGIN_USER, LOGOUT_USER } from "../actions/users_actions"
import { RECEIVE_USER_LIKES } from "../actions/like_actions"


const UserDislikeReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOGIN_USER:
            return action.user.disliked_comments
        case LOGOUT_USER:
            return []
        case RECEIVE_USER_LIKES:
            return action.likes.disliked_comments
        default:
            return state;
    }
}
export default UserDislikeReducer;