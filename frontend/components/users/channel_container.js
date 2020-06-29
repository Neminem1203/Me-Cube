import { connect } from "react-redux";
import Channel from "./channel";
import { getVideo } from "../../actions/video_actions";
import { getUser } from "../../actions/users_actions";
import { clearError } from "../../actions/modal_actions";


const mSTP = (state, ownProps)=> {
    return {
        yourId: state.session.userId,
        creator: state.entities.users[ownProps.match.params.channelId],
        videos: state.entities.videos,
        error: state.error.user
    }

};

const mDTP = dispatch => {
    return{
        getUser: userId => dispatch(getUser(userId)),
        getVideo: videoId => dispatch(getVideo(videoId)),
        clearError: () => dispatch(clearError())
    }
}

export default connect(mSTP, mDTP)(Channel);