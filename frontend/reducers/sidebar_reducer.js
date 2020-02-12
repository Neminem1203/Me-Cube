import { SIDEBAR_TOGGLE } from "../actions/modal_actions";

const sidebarReducer = (state=true, action)=>{
    Object.freeze(state);
    switch(action.type){
        case SIDEBAR_TOGGLE:
            if(state === true){return false;}
            else {return true;}
        default:
            return state;
    }
}
export default sidebarReducer;