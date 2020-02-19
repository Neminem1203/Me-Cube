import { merge } from "lodash";
import { RECEIVE_COMMENTS, RECEIVE_REPLIES, CLEAR_COMMENTS, RECEIVE_COMMENT, DELETE_COMMENT } from "../actions/comment_actions";


const commentReducer = (state={}, action) => {
    Object.freeze(state);
    const old_state = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            return merge({}, old_state, action.comment);
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