import { connect } from "react-redux";
import VideoShow from "./video_show";

const mSTP = (state, ownProps) => {
    return{
        // video: state.entities.videos[ownProps.match.params.video_id]
        video:{
            title: "Fake Title for Fake Video",
            video_url: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Caminandes-_Llama_Drama_-_Short_Movie.ogv",
            description: "Fake Description",
        },
        sidebar: state.ui.sidebar
    }
}

export default connect(mSTP, null)(VideoShow);