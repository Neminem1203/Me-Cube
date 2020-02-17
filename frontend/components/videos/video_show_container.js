import { connect } from "react-redux";
import VideoShow from "./video_show";

const mSTP = (state, ownProps) => {
    /*
    const videoProp = state.entities.videos[ownProps.match.params.video_id]
    */
   debugger
    return{
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
        video: state.entities.videos[ownProps.match.params.videoId],
        creator: state.entities.users[videoProp.creator_id],
        likes: 547,
        dislikes: 246,
        sidebar: state.ui.sidebar
    }
}

export default connect(mSTP, null)(VideoShow);