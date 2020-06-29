import { connect } from "react-redux";
import VideoForm from "./video_form";
import { createVideo } from "../../actions/video_actions";
import { clearError } from "../../actions/modal_actions";

const mSTP = state =>{
    return{
        video:{
            id: null,
            title: "",
            videoURL: "",
            videoFile: "",
            thumbnailURL: "",
            thumbnailFile: "",
            description: "",
            creatorId: state.session.userId
        },
        currentUser: state.session.userId
    }
}

const mDTP = dispatch =>{
    return{
        action: video => dispatch(createVideo(video)),
        clearError: ()=>dispatch(clearError())
    }
}
export default connect(mSTP, mDTP)(VideoForm);