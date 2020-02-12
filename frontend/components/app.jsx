import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./home_page";
import Navbar from "./navbar_container";
import Sidebar from "./sidebar_container";
import VideoShow from "./videos/video_show";

export default () => {
    // const login_regex = /login$/i;
    // const signup_regex = /signup$/i;
    return(
        <div>
            <Sidebar />
            <div id="me-cube-logo" >
                <a href="/#/"><img src={window.meCubeLogo} style={{ width: "150px" }}/></a>
            </div>
            <Route path="/" component={Navbar} />
            <div className="main-content">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/video/:videoId" component={VideoShow}/>
            </div>
            
        </div>
    )
}