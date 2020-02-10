import React from "react";
import ReactDOM from "react-dom";

const preloadedState = {};
document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root");
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
    ReactDOM.render(<h1>Frontend</h1>, root);
});