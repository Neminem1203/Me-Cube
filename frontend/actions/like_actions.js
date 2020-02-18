import * as LikeAPIUtil from "../util/like_util";

export const createLike = like => dispatch => {
    return LikeAPIUtil.createLike(like);
}
export const updateLike = like => dispatch => {
    return LikeAPIUtil.updateLike(like);
}
export const destroyLike = like => dispatch => {
    return LikeAPIUtil.destroyLike(like);
}