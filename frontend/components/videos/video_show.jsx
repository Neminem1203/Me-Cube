import React from "react";
class VideoShow extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div>
            <div className="col-3-5">
                <video preload="auto" controls="controls" autoPlay="autoplay">
                    <source src={this.props.video.video_url}/>
                </video>
                <h1>{this.props.video.title}</h1>
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