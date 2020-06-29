import React from "react";
import VideoList from "../videos/video_list_container";
import { profileIcon } from "../../icons";
const dim = 100;
class Channel extends React.Component{
    constructor(props){
        super(props);
        let creator_id = undefined;
        if(this.props.creator !== undefined){
            creator_id = this.props.creator.id;
        }
        this.state={
            creator: this.props.creator,
            creator_id: creator_id,
            videos: this.props.videos,
            ready: false
        }
        this.handleSetup = this.handleSetup.bind(this);
    }
    handleSetup() {
        this.props.clearError();
        this.props.getUser(this.props.match.params.channelId).then(test => {
            test.user.videos.forEach(vidId => {
                this.props.getVideo(vidId)
            });
            this.setState({ creator: this.props.creator, videos: this.props.videos, ready: true });
        });
    }
    componentDidMount() {
        this.handleSetup();
    }

    componentDidUpdate() {
        if (this.state.ready && this.state.creator_id !== this.props.match.params.channelId){
            this.setState({creator_id: this.props.match.params.channelId, ready: false})
            this.handleSetup();
        }
    }
    render() {
        if (this.props.error !== null || !this.state.ready) {return <h1>Loading...</h1>}
        // let userVideos = <></>;
        // if (Object.keys(this.state.videos).length !== 0){
        //      userVideos = this.state.creator.videos.map(vidId=>{
        //         return <li key={`video-${vidId}`}>
        //             {this.state.videos[vidId].title}
        //         </li>
        //     })
        // }
        return (    
            <div>
                <div id="username-subscribe">
                    <div id="profile-picture-username">
                        
                        {(this.state.creator.profile_picture === undefined)
                            ? profileIcon(dim) : <img src={this.state.creator.profile_picture} width={dim} height={dim} />}
                        <div style={{marginLeft: 10}}>
                            <h1>{this.state.creator.username}</h1>
                            <h5>{this.state.creator.subscribers} Subscibers</h5>
                        </div>
                    </div>
                    
                    <button>Subscribe</button>
                </div>
                <h2>Videos</h2>
                <ul>
                    <VideoList filter={this.state.creator.videos}/>
                </ul>
            </div>)
        
    }
}
export default Channel;