import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./home_page";

export default () =>{
    return(
        <div>
            <div id="me-cube-logo" >
                <img src={window.meCubeLogo} style={{ width: "150px" }}/>
            </div>
            <Route to="/" component={HomePage} />
        </div>
    )
}