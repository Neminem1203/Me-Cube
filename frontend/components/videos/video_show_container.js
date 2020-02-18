import { connect } from "react-redux";
import VideoShow from "./video_show";
import { getVideo, updateVideo } from "../../actions/video_actions";
import { getUser } from "../../actions/users_actions";
import {createLike, updateLike, destroyLike} from "../../actions/like_actions";

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
        currentUser: state.session.userId
    }
    const sample_return = {
        // video:{
        //     title: "Fake Title for Fake Video",
        //     video_url: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Caminandes-_Llama_Drama_-_Short_Movie.ogv",
        //     description: "This is a Fake Description for a fake show page. Nothing gets saved to database as of yet",
        //     created_at: "12 Feb 2020",
        //     creator_id: 1,
        //     liked: true,
        //     creator: state.entities.users[state.entities.video.creator_id]
        // },
        // creator:{
        //     id: 1,
        //     username: "Test Username",
        //     video_id: [1]
        // },
        video: video,
        creator: creator,
        likes: 547,
        dislikes: 246,
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
    }
}

export default connect(mSTP, mDTP)(VideoShow);