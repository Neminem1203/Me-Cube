import { connect } from "react-redux";
import UserForm from "./user_form";
import { createUser } from "../../actions/users_actions";

const mSTP = (state) => {
    return {
        user: {
            username: "",
            email: "",
            password: ""
        },
        formType: "Sign Up"
    }
}

const mDTP = (dispatch) => {
    return {
        action: user => dispatch(createUser(user))
    }
}

export default connect(mSTP, mDTP)(UserForm);