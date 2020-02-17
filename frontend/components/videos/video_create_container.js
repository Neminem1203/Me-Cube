import { connect } from "react-redux";
import VideoForm from "./video_form";
import { createVideo } from "../../actions/video_actions";

const mSTP = state =>{
    return{
        video:{
            id: null,
            title: "",
            videoURL: "",
            videoFile: "",
            description: "",
            creatorId: state.session.userId
        },
        currentUser: state.session.userId
    }
}

const mDTP = dispatch =>{
    return{
        action: video => dispatch(createVideo(video))
    }
}
export default connect(mSTP, mDTP)(VideoForm);