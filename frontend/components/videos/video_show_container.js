import { connect } from "react-redux";
import VideoShow from "./video_show";
import { getVideo, updateVideo } from "../../actions/video_actions";
import { getUser } from "../../actions/users_actions";
import {createLike, updateLike, destroyLike} from "../../actions/like_actions";
import { showModal, SIGN_UP } from "../../actions/modal_actions";

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
        users: state.entities.users
    }
}

const mDTP = dispatch =>{
    return{
        getUser: userId => dispatch(getUser(userId)),
        getVideo: videoId => dispatch(getVideo(videoId)),
        updateVideo: video => dispatch(updateVideo(video)),
        createLike: like => dispatch(createLike(like)),
        updateLike: like => dispatch(updateLike(like)),
        destroyLike: like => dispatch(destroyLike(like)),
        showSignup: () => dispatch(showModal(SIGN_UP)),
    }
}

export default connect(mSTP, mDTP)(VideoShow);