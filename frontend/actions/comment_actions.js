import * as CommentAPIUtil from "../util/comment_util";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_REPLIES = "RECEIVE_REPLIES";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS";

export const receiveComments = comments => {
    return{
        type: RECEIVE_COMMENTS,
        comments
    }
}
export const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}
export const receiveReplies = comments => {
    return{
        type: RECEIVE_REPLIES,
        comments
    }
}

export const deleteComment = commentId =>{
    return{
        type: DELETE_COMMENT,
        commentId
    }
}

export const clearComments = () =>{
    return {type: CLEAR_COMMENTS}
}


export const getComments = comments => dispatch => {
    return CommentAPIUtil.getComments(comments).then(payload => dispatch(receiveComments(payload)), e => {/* errorsCommentReducer required */});
}

export const getReplies = comments => dispatch => {
    return CommentAPIUtil.getComments(comments).then(payload => dispatch(receiveReplies(payload)), e => {/* errorsCommentReducer required */ });
}

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment).then(payload => dispatch(receiveComment(payload)), e => {/* errorsCommentReducer required */ });
}

export const destroyComment = commentId => dispatch=>{
    return CommentAPIUtil.destroyComment(commentId).then(payload => dispatch(deleteComment(payload)), e => {/* errorsCommentReducer required*/});
}

