import React from "react";
import { Route } from "react-router-dom";


import Navbar from "./bars/navbar_container";
import Sidebar from "./bars/sidebar_container";
import MainContent from "./main_content_container";
import ErrorWindow from "./error/error_window_container";
import Searchbar from "./bars/searchbar";

export default () => {

    return(
        <div>
            <Route path="/" component={Sidebar}/>
            <div >
                <a id="me-cube-logo" href="/#/">
                    <img src={window.meCubeLogo}/>
                </a>
                <Route path="/" component={Searchbar} />
                <ErrorWindow />
            </div>
            <Route path="/" component={Navbar} />
            <MainContent />
        </div>
    )
}