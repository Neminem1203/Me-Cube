import React from "react";
class VideoList extends React.Component{
    componentDidMount(){
        this.props.getVideos();
    }
    render(){
        if(this.props.videos.length === 0){return null;}
        return(
            <ul>
                {this.props.videos.map(vid => <a href={`/#/videos/${vid.id}`} key={`video-${vid.id}`}><li>{vid.title}</li></a>)}
            </ul>
        )
    }
}
export default VideoList;