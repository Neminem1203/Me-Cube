import { connect } from "react-redux";
import UserForm from "./user_form";
import { createUser } from "../../actions/users_actions";
import { login } from "../../actions/users_actions";

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
        action: user => dispatch(createUser(user)),
        demo: () => dispatch(login({ username: "Demo", password: "hunter2" }))
    }
}

export default connect(mSTP, mDTP)(UserForm);