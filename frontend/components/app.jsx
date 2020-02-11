import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./home_page";
import Navbar from "./navbar_container"

export default () => {
    // const login_regex = /login$/i;
    // const signup_regex = /signup$/i;
    return(
        <div>
            <div id="me-cube-logo" >
                <img src={window.meCubeLogo} style={{ width: "150px" }}/>
            </div>
            <Route path="/" component={Navbar} />
            <Route exact path="/" component={HomePage} />
        </div>
    )
}