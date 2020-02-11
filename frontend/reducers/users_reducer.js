
import merge from "lodash";


const usersReducer = (state={}, action)=>{
    Object.freeze(state);
    const new_state = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_USER:
            return merge({}, new_state, action.user);
        default:
            return state;
    }
}
export default usersReducer;