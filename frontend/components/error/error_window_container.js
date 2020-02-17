import { connect } from "react-redux";
import ErrorWindow from "./error_window";
import { clearError } from "../../actions/modal_actions";

const mSTP = state =>{
    return{
        errors: state.error
    }
}

const mDTP = dispatch =>{
    
    return{
        clearError: ()=> dispatch(clearError())
    }
}
export default connect(mSTP, mDTP)(ErrorWindow);