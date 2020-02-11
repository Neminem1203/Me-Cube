import * as UserAPIUtil from "../util/users_util";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const LOGIN_USER = "LOGIN_USER";

export const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const receiveUser = user =>{
    return {
        type: RECEIVE_USER,
        user
    }
}

export const loginUser = user => { //works differently than receiveUser in sessionReducer
    return {
        type: LOGIN_USER,
        user
    }
}

export const getUsers = userList => dispatch =>{
    return UserAPIUtil.receiveUsers(userList).then(payload => dispatch(receiveUsers(payload)))
}

export const getUser = userId => dispatch =>{
    return UserAPIUtil.receiveUser(userId).then(payload=> dispatch(receiveUser(payload)));
}

export const createUser = user => dispatch =>{
    return UserAPIUtil.createUser(user).then(payload=> dispatch(receiveUser(payload)));
}

export const login = user => dispatch =>{
    return UserAPIUtil.login(user).then(payload => dispatch(loginUser(payload)));
}
