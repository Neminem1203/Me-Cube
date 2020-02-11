import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import { getUsers, getUser, createUser, login } from "./actions/users_actions";

const preloadedState = {};
document.addEventListener("DOMContentLoaded", ()=>{
    if(window.currentUser){
        preloadedState = {
            entities:{
                users: {[window.currentUser.id]: window.currentUser}
            },
            session:{
                currentUserId: window.currentUser.id
            }
        }
        ReactDOM.render(<script>Nothing to see here</script>, document.getElementById("important-info"))
    }
    const root = document.getElementById("root");
    const store = configureStore(preloadedState);
    window.getState = store.getState();
    window.dispatch = store.dispatch;
    window.getUsers = getUsers;
    window.getUser = getUser;
    window.createUser = createUser;
    window.login = login;
    ReactDOM.render(<Root store={store}/>, root);
});