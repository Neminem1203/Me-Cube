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
        action: user => dispatch(login(user)),
        demo: () => dispatch(login({username: "Demo", password: "hunter2"}))
    }
}

export default connect(mSTP, mDTP)(UserForm);