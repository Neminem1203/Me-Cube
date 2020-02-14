import { connect } from "react-redux";
import VideoForm from "./video_form";

const mSTP = state =>{
    return{
        video:{
            id: null,
            title: "",
            videoURL: "",
            description: "",
            creatorId: state.session.userId
        }
    }
}

const mDTP = dispatch =>{
    return{

    }
}
export default connect(mSTP, mDTP)(VideoForm);