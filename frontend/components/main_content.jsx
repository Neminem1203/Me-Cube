import React from "react";
import HomePage from "./home_page";
import VideoShow from "./videos/video_show_container";
import { Route } from "react-router-dom";
import EditUser from "./users/edit_user_container";
import { ProtectedRoute } from "../util/route_util";

const MainContent = props =>{
    let mainClass = (props.sidebar) ? "main-content" : "main-content active";
    return (
        <div className={mainClass}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/video/:videoId" component={VideoShow} />
            <ProtectedRoute exact path="/user/edit/" component={EditUser} />
        </div>
    )
}

export default MainContent;