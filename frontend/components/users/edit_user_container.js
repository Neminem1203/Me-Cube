import { connect } from "react-redux";
import EditUser from "./edit_user";
import { updateUser } from "../../actions/users_actions";


const mSTP = state => {
    return{
        user: state.entities.users[state.session.userId]
    }
}

const mDTP = dispatch => {
    return{
        updateUser: user => dispatch(updateUser(user))
    }
}

export default connect(mSTP, mDTP)(EditUser);