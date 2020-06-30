import { connect } from "react-redux";
import Channel from "./channel";
import { getVideo } from "../../actions/video_actions";
import { getUser } from "../../actions/users_actions";
import { clearError, showModal, SIGN_UP } from "../../actions/modal_actions";
import { newSubscription, removeSubscription } from "../../actions/subscription_actions";


const mSTP = (state, ownProps) => {
    return {
        users: state.entities.users,
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
        clearError: () => dispatch(clearError()),
        newSubscription: subscription => dispatch(newSubscription(subscription)),
        removeSubscription: subscription => dispatch(removeSubscription(subscription)),
        showSignup: () => dispatch(showModal(SIGN_UP)),
    }
}

export default connect(mSTP, mDTP)(Channel);