import { RECEIVE_USER_ERROR, CLEAR_ERROR } from "../actions/modal_actions";
import { LOGIN_USER } from "../actions/users_actions";

const errorUserReducer = (state=null, action)=>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_USER_ERROR:
            return action.errorMsgs;
        case CLEAR_ERROR:
            return null;
        case LOGIN_USER:
            return null;
        default:
            return state;
    }
}
export default errorUserReducer;