import * as LikeAPIUtil from "../util/like_util";
export const RECEIVE_USER_LIKES = "RECEIVE_USER_LIKES";

export const receiveLikes = likes =>{
    return{
        type: RECEIVE_USER_LIKES,
        likes
    }
}

export const createLike = like => dispatch => {
    return LikeAPIUtil.createLike(like).then(payload => dispatch(receiveLikes(payload)));
}
export const updateLike = like => dispatch => {
    return LikeAPIUtil.updateLike(like).then(payload => dispatch(receiveLikes(payload)));
}
export const destroyLike = like => dispatch => {
    return LikeAPIUtil.destroyLike(like).then(payload => dispatch(receiveLikes(payload)));
}

export const getUserCommentLikes = userId => dispatch => {
    return LikeAPIUtil.getUserCommentLikes(userId).then(payload => dispatch(receiveLikes(payload)));
}