import React from "react";
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
        debugger
        
        return (
        <div>
            <div className="col-3-5">
                <video preload="auto" controls="controls" autoPlay="autoplay">
                    <source src={this.props.video.video_url}/>
                </video>
                <h1 style={{margin: 0}}>{this.props.video.title}</h1>
                <textarea id="current-video-url" className="hidden" defaultValue={window.location.href}/>
                <ul className="video-info">
                    <li>9001 views • {this.props.video.created_at}</li>
                    <li>
                        <button>Like</button>
                        <button>Dislike</button>
                        <button onClick={this.copyShareUrl}>Share</button>
                    </li>
                </ul>
                <h3>{this.props.video.description}</h3>
                <h3>Video URL: {this.props.video.video_url}</h3>
            </div>
            <div className="col-2-5">
                RECOMMENDATIONS
            </div>
        </div>
        )
    }
}

export default VideoShow;