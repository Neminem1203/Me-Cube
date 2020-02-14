import { connect } from "react-redux";
import Channel from "./channel";

const mSTP = state => {
    return{
        yourId: state.session.userId
    }
};

const mDTP = dispatch => {
    return{

    }
}

export default connect(mSTP, mDTP)(Channel);