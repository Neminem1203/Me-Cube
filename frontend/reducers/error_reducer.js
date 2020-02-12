import { RECEIVE_ERROR } from "../actions/modal_actions";

const errorReducer = (state="", action)=>{
    switch(action.type){
        case RECEIVE_ERROR:
            return action.errorMsg;
        default: 
            return state;
    }
}

export default errorReducer;