import {merge} from "lodash";
import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from "../actions/video_actions";

const videosReducer = (state={}, action) =>{
    Object.freeze(state);
    const old_state = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_VIDEOS:
            return merge({}, old_state, action.videos);
        case RECEIVE_VIDEO:
            return merge({}, old_state, {[action.video.id]: action.video});
        default:
            return state;
    }
}

export default videosReducer;