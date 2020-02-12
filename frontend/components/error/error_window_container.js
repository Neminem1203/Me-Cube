import { connect } from "react-redux"
import ErrorWindow from "./error_window"
import { receiveError } from "../../actions/modal_actions"

const mSTP = state =>{
    return{
        errorMsg: state.error
    }
}

const mDTP = dispatch =>{
    return{
        clearError:()=> dispatch(receiveError(""))
    }
}
export default connect(mSTP, mDTP)(ErrorWindow);