import {SHOW_MODAL} from "../actions/modal_actions";

const modalReducer = (state="", action) => {
    Object.freeze(state);
    switch(action.type){
        case SHOW_MODAL:
            return action.modal_name
        default:
            return state;
    }
}
export default modalReducer;