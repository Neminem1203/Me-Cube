import React from "react";
import { Route } from "react-router-dom";


import Navbar from "./bars/navbar_container";
import Sidebar from "./bars/sidebar_container";
import MainContent from "./main_content_container";
import ErrorWindow from "./error/error_window_container";

export default () => {

    return(
        <div>
            <Route path="/" component={Sidebar}/>
            <div id="me-cube-logo">
                <a href="/#/"><img src={window.meCubeLogo}/></a>
                <ErrorWindow />
            </div>
            <Route path="/" component={Navbar} />
            <MainContent />
        </div>
    )
}