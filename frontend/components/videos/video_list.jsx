import React from "react";

const VideoThumb = ({vid, currentVideo}) => {
    if(vid === undefined || vid.id === parseInt(currentVideo)){return <></>;}
    let viewOrViews = vid.views == 1 ? "view" : "views";
    return(
    
        <li>
            <div>
                <a href={`/#/videos/${vid.id}`}>
                    <img src={vid.thumbnail} />
                </a>
                <a href={`/#/videos/${vid.id}`} style={{display: "block", height: 45}}>
                    <span className='video-title-span'>{vid.title}</span>
                </a>
                <a href={`/#/channel/${vid.creator_id}`}>
                    <span className="video-creator-span">{vid.creator_username}</span>
                </a>
                <br />
                <a>
                    <span className="video-views">{vid.views + ` ${viewOrViews} • ` + vid.created_at}</span>
                </a>
            </div>
        </li>
    )}

class VideoList extends React.Component{
    componentDidMount(){
        this.props.getVideos();
    }
    render(){
        if(this.props.videos.length === 0){return null;}
        if(this.props.filter === undefined){
            const random_order = Object.values(this.props.videos);
            const video_len = random_order.length;
            for(let i = 0; i < video_len; i++){
                const random_num = Math.floor(Math.random()*video_len)
                const temp = random_order[random_num];
                random_order[random_num] = random_order[i];
                random_order[i] = temp;
            }
            const theVideos = (this.props.limit) ? random_order.slice(0, this.props.limit) : random_order;

            return(
                <ul className="video-list">
                    {theVideos.map(vid => <VideoThumb vid={vid} key={`video-${vid.id}`} currentVideo={this.props.currentVideo}/>)}
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