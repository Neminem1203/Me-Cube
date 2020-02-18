import { getVideos } from "../../actions/video_actions"
import { connect } from "react-redux"
import VideoList from "./video_list"

const mSTP = (state, ownProps) => {
    return{
        videos: state.entities.videos
    }
}

const mDTP = dispatch => {
    return{
        getVideos: () => dispatch(getVideos())
    }
}

export default connect(mSTP, mDTP)(VideoList);