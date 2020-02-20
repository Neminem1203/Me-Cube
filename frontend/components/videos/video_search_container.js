import { connect } from "react-redux";
import VideoSearch from "./video_search";
import { searchVideos } from "../../actions/video_actions";

const mSTP = (state, ownProps) => {
    const search_query = ownProps.location.search.slice(14);
    if(search_query === ""){window.location.href="/#/"}
    return {
        search_query: search_query,
        videos: state.entities.videos
    }
}

const mDTP = dispatch => {
    return {
        searchVideos: search => dispatch(searchVideos(search))
    }
}

export default connect(mSTP, mDTP)(VideoSearch);