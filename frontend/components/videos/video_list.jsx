import React from "react";

const VideoThumb = ({vid}) => {
    if(vid === undefined){return <></>;}
    return(<a href = {`/#/videos/${vid.id}`}>
        <li>
            <div>
                <img src={vid.thumbnail} /><br />
                <span className='video-title-span'>{vid.title}</span>
                <br />
                <span>{vid.creator_username}</span>
                <br />
                <span>{vid.views} • {vid.created_at}</span>
            </div>
        </li>
    </a >)}

class VideoList extends React.Component{
    componentDidMount(){
        this.props.getVideos();
    }
    render(){
        if(this.props.videos.length === 0){return null;}
        if(this.props.filter === undefined){
            return(
                <ul className="video-list">
                    {Object.values(this.props.videos).map(vid => <VideoThumb vid={vid} key={`video-${vid.id}`}/>)}
                </ul>
            )}
        else{
            const videos = this.props.filter.map(vidId => {
                return <VideoThumb vid={this.props.videos[vidId]} key={`video-${vidId}`} />
            })
            return(
                <ul className="video-list">
                    {videos}
                </ul>
            )
        }
    }
}
export default VideoList;