import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

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
    ReactDOM.render(<Root store={store}/>, root);
});