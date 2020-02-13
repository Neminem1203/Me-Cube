import React from "react";
import {profileIcon} from "../../icons";
class VideoShow extends React.Component{
    constructor(props){
        super(props);
    }

    copyShareUrl(e){
        e.preventDefault();
        const video_url = document.getElementById("current-video-url");
        video_url.classList.remove("hidden");
        video_url.select();
        document.execCommand("copy");
        video_url.classList.add("hidden");
    }
    render(){
        return (
        <div>
            <div className="col-3-5">
                <video  controls="controls" autoPlay="autoplay" muted="muted">
                    <source src={this.props.video.video_url}/>
                </video>
                <h2 style={{marginTop: "16px", marginBottom: "8px"}}>{this.props.video.title}</h2>
                <textarea id="current-video-url" className="hidden" defaultValue={window.location.href}/>
                <ul className="video-info">
                    <li style={{color:"gray"}}>9001 views • {this.props.video.created_at}</li>
                    <li>
                        <button>Like</button>
                        <button>Dislike</button>
                        <button onClick={this.copyShareUrl}>Share</button>
                    </li>
                </ul>
                    <div className="profile-pic">
                        <a href={`/#/channel/${this.props.video.creator_id}`}>{profileIcon("30px")}</a>
                </div>
                <div className="col-4-5">
                    <a href={`/#/channel/${this.props.video.creator_id}`} style={{textDecoration: "none", color:"black"}}>
                        <h3 style={{fontSize: "18px"}}>{this.props.creator.username}</h3>
                    </a>
                    <h5 style={{fontWeight: "400"}}>{this.props.video.description}</h5>
                </div>
            </div>
            <div className="col-2-5">
                RECOMMENDATIONS
            </div>
        </div>
        )
    }
}

export default VideoShow;