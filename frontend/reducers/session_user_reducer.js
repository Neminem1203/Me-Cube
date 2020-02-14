import {LOGIN_USER, LOGOUT_USER} from "../actions/users_actions"

const UserReducer = (state=null, action)=>{
    Object.freeze(state);
    switch(action.type){
        case LOGIN_USER:
            return action.user.id
        case LOGOUT_USER:
            return null;
        default:
            return state;
    }
}
export default UserReducer;