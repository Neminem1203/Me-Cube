import React from "react";
import { Route } from "react-router-dom";


import Navbar from "./bars/navbar_container";
import Sidebar from "./bars/sidebar_container";
import MainContent from "./main_content_container";

export default () => {

    return(
        <div>
            <Sidebar />
            <div id="me-cube-logo">
                <a href="/#/"><img src={window.meCubeLogo}/></a>
            </div>
            <Route path="/" component={Navbar} />
            <MainContent />
        </div>
    )
}