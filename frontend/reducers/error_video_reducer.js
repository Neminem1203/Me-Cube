import { RECEIVE_VIDEO_ERROR, CLEAR_ERROR } from "../actions/modal_actions";
import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from "../actions/video_actions";

const errorVideoReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEO_ERROR:
            return action.errorMsgs;
        case CLEAR_ERROR:
            return null;
        case RECEIVE_VIDEO:
            return null;
        default:
            return state;
    }
}
export default errorVideoReducer;