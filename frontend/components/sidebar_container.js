import { connect } from "react-redux";
import Sidebar from "./sidebar";
import { sidebarToggle } from "../actions/modal_actions";

const mSTP = state =>{
    return {
        channelId: state.session.userId,
        sidebar: state.ui.sidebar
    }
};

const mDTP = dispatch =>{
    return {
        sidebarToggle: () => dispatch(sidebarToggle())
    }
};

export default connect(mSTP, mDTP)(Sidebar);