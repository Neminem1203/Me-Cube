import { LOGIN_USER, LOGOUT_USER } from "../actions/users_actions"
import { RECEIVE_USER_LIKES } from "../actions/like_actions"


const UserLikeReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOGIN_USER:
            return action.user.liked_comments
        case LOGOUT_USER:
            return []
        case RECEIVE_USER_LIKES:
            return action.likes.liked_comments
        default:
            return state;
    }
}
export default UserLikeReducer;