import HomePage from "./home_page";
import { connect } from "react-redux";
import { clearError } from "../actions/modal_actions";

const mSTP = (state, ownProps) => {
    return{

    }
}

const mDTP = dispatch =>{
    return{
        clearError: () => dispatch(clearError()),
    }
}

export default connect(mSTP, mDTP)(HomePage);