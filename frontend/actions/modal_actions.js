export const SHOW_MODAL = "SHOW_MODAL";
export const SIGN_UP = "Sign Up";
export const LOGIN = "Login";
export const ACCOUNT_DETAILS = "ACCOUNT_DETAILS";
export const SIDEBAR_TOGGLE = "SIDEBAR_TOGGLE";
export const RECEIVE_USER_ERROR = "RECEIVE_USER_ERROR";
export const RECEIVE_VIDEO_ERROR = "RECEIVE_VIDEO_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const showModal = modal_name =>{
    return {
        type: SHOW_MODAL, 
        modal_name
    }
}


export const sidebarToggle = () => {
    return {
        type: SIDEBAR_TOGGLE
    }
}

export const receiveUserError = errorMsgs =>{
    return{
        type: RECEIVE_USER_ERROR,
        errorMsgs
    }
}

export const receiveVideoError = errorMsgs =>{
    return{
        type: RECEIVE_VIDEO_ERROR,
        errorMsgs
    }
}

export const clearError = () =>{
    return{
        type: CLEAR_ERROR
    }
}