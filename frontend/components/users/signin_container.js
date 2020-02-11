import { connect } from "react-redux";
import UserForm from "./user_form"
import { login } from "../../actions/users_actions";

const mSTP = (state) =>{
    return{
        user:{
            username: "",
            password: ""
        },
        formType: "Login"
    }
}

const mDTP = (dispatch) =>{
    return{
        action: user => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(UserForm);