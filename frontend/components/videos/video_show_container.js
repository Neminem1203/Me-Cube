import { connect } from "react-redux";
import VideoShow from "./video_show";
import { getVideo, updateVideo, addViewCount } from "../../actions/video_actions";
import { getUser, getUsers } from "../../actions/users_actions";
import {createLike, updateLike, destroyLike} from "../../actions/like_actions";
import { showModal, SIGN_UP } from "../../actions/modal_actions";
import { getComments, clearComments, createComment, updateComment, destroyComment } from "../../actions/comment_actions";
import { getUserCommentLikes } from "../../actions/like_actions"

const mSTP = (state, ownProps) => {
    let video = state.entities.videos[ownProps.match.params.videoId];
    if (video === undefined) {
        video = {}
    }
    const creator = state.entities.users[video.creator_id] || null;
    return{
        video: {
            video,
            creator: creator,
            like_dislike: video.like_dislike,
            likes: video.likes,
            dislikes: video.dislikes,
        },
        error: state.error.video,
        currentUser: state.session.userId,
        comments: state.entities.comments,
        users: state.entities.users,
        liked_comments: state.session.likedComments,
        disliked_comments: state.session.dislikedComments,
    }
}

const mDTP = dispatch =>{
    return {
        addViewCount: videoId => dispatch(addViewCount(videoId)),
        destroyComment: commentId => dispatch(destroyComment(commentId)),
        destroyLike: like => dispatch(destroyLike(like)),
        clearComments: () => dispatch(clearComments()),
        createComment: comment => dispatch(createComment(comment)),
        createLike: like => dispatch(createLike(like)),
        getComments: comments => dispatch(getComments(comments)),
        getUser: userId => dispatch(getUser(userId)),
        getUserCommentLikes: userId => dispatch(getUserCommentLikes(userId)),
        getUsers: userList => dispatch(getUsers(userList)),
        getVideo: videoId => dispatch(getVideo(videoId)),
        showSignup: () => dispatch(showModal(SIGN_UP)),
        updateComment: comment => dispatch(updateComment(comment)),
        updateLike: like => dispatch(updateLike(like)),
        updateVideo: video => dispatch(updateVideo(video)),
    }
}

export default connect(mSTP, mDTP)(VideoShow);