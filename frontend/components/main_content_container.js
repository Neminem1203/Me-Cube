import { connect } from "react-redux"
import MainContent from "./main_content"
import { getVideos } from "../actions/video_actions"

const mSTP = state => {
    return{
        sidebar: state.ui.sidebar
    }
}

const mDTP = dispatch =>{
    return{
        getVideos: () => dispatch(getVideos())
    }
}

export default connect(mSTP, mDTP)(MainContent);