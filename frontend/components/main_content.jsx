import React from "react";
import HomePage from "./home_page";
import VideoShow from "./videos/video_show_container";
import { Route } from "react-router-dom";

const MainContent = props =>{
    let mainClass = (props.sidebar) ? "main-content" : "main-content active";
    return (
        <div className={mainClass}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/video/:videoId" component={VideoShow} />
        </div>
    )
}

export default MainContent;