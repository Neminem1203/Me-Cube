import { merge } from "lodash";
import { RECEIVE_COMMENTS, RECEIVE_REPLIES, CLEAR_COMMENTS, DELETE_COMMENT } from "../actions/comment_actions";


const commentReducer = (state={}, action) => {
    Object.freeze(state);
    const old_state = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_REPLIES:
            return merge({}, old_state, action.comments);
        case DELETE_COMMENT:
            delete old_state[action.commentId]
            return old_state;
        case CLEAR_COMMENTS:
            return {};
        default:
            return state;
    }
}
export default commentReducer;