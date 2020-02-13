import { RECEIVE_USER_ERROR, CLEAR_ERROR } from "../actions/modal_actions";

const errorUserReducer = (state=null, action)=>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_USER_ERROR:
            return action.errorMsg;
        case CLEAR_ERROR:
            return null;
        default:
            return state;
    }
}
export default errorUserReducer;