import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../util/route_util";

import HomePage from "./home_page";
import EditUser from "./users/edit_user_container";
import VideoShow from "./videos/video_show_container";
import VideoCreate from "./videos/video_create_container";
import Channel from "./users/channel_container";
import VideoSearch from "./videos/video_search_container";

class MainContent extends React.Component{

    componentDidMount(){
        this.props.getVideos();
    }

    render(){
        let mainClass = (this.props.sidebar) ? "main-content" : "main-content active";
        return (
            <div className={mainClass}>
                <Route exact path="/" component={HomePage} />
                <ProtectedRoute exact path="/user/edit" component={EditUser} />
                <Route exact path="/channel/:channelId" component={Channel}/>
                <Route exact path="/video/new" component={VideoCreate} />
                <Route exact path="/videos/:videoId" component={VideoShow} />
                <Route exact path="/results" component={VideoSearch}/>
            </div>
        )
    }
}
export default MainContent;