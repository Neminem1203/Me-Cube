export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
import * as VideoAPIUtil from "../util/video_util";
import { receiveVideoError } from "./modal_actions";

export const receiveVideos = videos =>{
    return{
        type: RECEIVE_VIDEOS,
        videos
    }
}

export const receiveVideo = video =>{
    return{
        type: RECEIVE_VIDEO,
        video
    }
}

export const getVideos = () => dispatch =>{
    return VideoAPIUtil.getVideos().then(payload => dispatch(receiveVideos(payload)),
        error =>  dispatch(receiveVideoError(error.responseJSON)))
}

export const createVideo = video => dispatch =>{
    return VideoAPIUtil.uploadVideo(video).then(payload=> dispatch(receiveVideo(payload)),
        error => dispatch(receiveVideoError(error.responseJSON)));
};
