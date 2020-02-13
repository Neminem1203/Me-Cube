import React from "react";
import {profileIcon, thumbsUpIcon, thumbsDownIcon, shareIcon} from "../../icons";
class VideoShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            liked: this.props.video.liked,
            likes: this.props.likes,
            dislikes: this.props.dislikes
        }
    }

    copyShareUrl(e){
        e.preventDefault();
        const video_url = document.getElementById("current-video-url");
        video_url.classList.remove("hidden");
        video_url.select();
        document.execCommand("copy");
        video_url.classList.add("hidden");
    }

    thumbAction(bool){
        return e=>{
            e.preventDefault();
            console.log(bool);
            const field = (bool) ? "likes" : "dislikes";
            if(this.state.liked === bool){this.setState({liked: null, [field]: this.state[field]-1})} //Destroy the like/dislike
            else { this.setState({ liked: bool, [field]: this.state[field] + 1})} //Create or Set Like/Dislike
        }
    }

    render(){
        const thumbsUpClass = (this.state.liked === true) ? "active like vid-info-btn" : "like vid-info-btn";
        const thumbsDownClass = (this.state.liked === false) ? "active dislike vid-info-btn" : "dislike vid-info-btn";
        return (
        <div>
            <div className="video-container">
                <video preload="auto" controls="controls" autoPlay="autoplay">
                    <source src={this.props.video.video_url}/>
                </video>
                <h2 style={{marginTop: "16px", marginBottom: "8px"}}>{this.props.video.title}</h2>
                <textarea id="current-video-url" className="hidden" defaultValue={window.location.href}/>
                <ul className="video-info">
                    <li style={{color:"gray"}}>9001 views • {this.props.video.created_at}</li>
                    <li>
                        <div onClick={this.thumbAction(true)} className={thumbsUpClass}>
                            {thumbsUpIcon(20)}
                            <span>{this.state.likes}</span>
                        </div>
                        <div onClick={this.thumbAction(false)} className={thumbsDownClass}>
                            {thumbsDownIcon(20)}
                            <span>{this.state.dislikes}</span>
                        </div>
                        <div onClick={this.copyShareUrl} className="vid-info-btn">
                            {shareIcon(20)}
                            <span>Share</span>
                        </div>
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
            <div className="video-recommendations">
                <span>Recommendation</span>
            </div>
        </div>
        )
    }
}

export default VideoShow;