export const SHOW_MODAL = "SHOW_MODAL";
export const SIGN_UP = "Sign Up";
export const LOGIN = "Login";
export const ACCOUNT_DETAILS = "ACCOUNT_DETAILS";
export const SIDEBAR_TOGGLE = "SIDEBAR_TOGGLE";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

export const showModal = modal_name =>{return {type: SHOW_MODAL, modal_name}}


export const sidebarToggle = () => {
    return {
        type: SIDEBAR_TOGGLE
    }
}

export const receiveError = errorMsg =>{
    return{
        type: RECEIVE_ERROR,
        errorMsg
    }
}