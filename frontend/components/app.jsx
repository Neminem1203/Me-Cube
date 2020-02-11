import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./home_page";

export default () =>{
    return(
        <div>
            <h1>Me-Cube</h1>
            <Route to="/" component={HomePage} />
        </div>
    )
}