
import { merge } from "lodash";
import { RECEIVE_USERS, RECEIVE_USER, LOGIN_USER } from "../actions/users_actions";


const usersReducer = (state={}, action)=>{
    Object.freeze(state);
    const old_state = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_USERS:
            return merge({}, old_state, action.users);
        case RECEIVE_USER:
            return merge({}, old_state, { [action.user.id]: action.user });
        case LOGIN_USER:
            return merge({}, old_state, { [action.user.id]: action.user });
        default:
            return state;
    }
}
export default usersReducer;