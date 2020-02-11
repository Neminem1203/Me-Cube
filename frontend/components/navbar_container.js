import {connect} from "react-redux";
import { showModal } from "../actions/modal_actions";
import Navbar from "./navbar";
import {logout} from "../actions/users_actions";

const mSTP = (state) =>{
    return {
        modal: state.ui.modal,
        user: state.entities.users[state.session.userId]
    }
}

const mDTP = (dispatch) =>{
    return{
        showModal: modal_name => dispatch(showModal(modal_name)),
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(Navbar);