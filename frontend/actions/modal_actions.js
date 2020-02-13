export const SHOW_MODAL = "SHOW_MODAL";
export const SIGN_UP = "Sign Up";
export const LOGIN = "Login";
export const ACCOUNT_DETAILS = "ACCOUNT_DETAILS";
export const SIDEBAR_TOGGLE = "SIDEBAR_TOGGLE";
export const RECEIVE_USER_ERROR = "RECEIVE_USER_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const showModal = modal_name =>{return {type: SHOW_MODAL, modal_name}}


export const sidebarToggle = () => {
    return {
        type: SIDEBAR_TOGGLE
    }
}

export const receiveUserError = errorMsg =>{
    return{
        type: RECEIVE_USER_ERROR,
        errorMsg
    }
}

export const clearError = () =>{
    return{
        type: CLEAR_ERROR
    }
}