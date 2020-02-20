import React from "react";
import VideoList from "./video_list_container";
class VideoSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search: props.search_query,
            videos: props.videos
        }
        this.getVideos = this.getVideos.bind(this);
    }
    componentDidMount() {
        this.props.searchVideos(this.props.search_query).then(payload => {
            this.getVideos(payload.videos)
        });
        console.log(this.props.search_query);
    }
    getVideos(videos){
        this.setState({videos: videos})
    }
    componentDidUpdate(){
        if(this.state.search !== this.props.search_query){
            this.setState({ search: this.props.search_query })
            this.props.searchVideos(this.props.search_query).then(payload => {
                this.getVideos(payload.videos)
            });
            console.log(this.props.search_query);
        }
    }
    render(){
        if(Object.keys(this.props.videos).length === 0){ return null; }
        return (
        <div id="search-result">
            <VideoList filter={Object.keys(this.state.videos)} />
        </div>);
    }
}
export default VideoSearch;