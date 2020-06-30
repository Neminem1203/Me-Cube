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
            ready: false,
            subscribed: false
        }
        this.handleSetup = this.handleSetup.bind(this);
    }

    toggleSubscription(bool){
        // True bool == create subscription, false bool == delete subscription
        return e => {
            e.preventDefault();
            if (bool) {
                this.props.newSubscription({ channel_id: this.state.creator_id, subscriber_id: this.props.yourId }).then(() => { this.setState({ subscribed: true })})
            } else {
                this.props.removeSubscription({ channel_id: this.state.creator_id, subscriber_id: this.props.yourId }).then(() => { this.setState({ subscribed: false }) })
            }

        }
    }

    handleSetup() {
        this.props.clearError();
        this.props.getUser(this.props.match.params.channelId).then(test => {
            test.user.videos.forEach(vidId => {
                this.props.getVideo(vidId)
            });
            this.setState({ creator: this.props.creator, videos: this.props.videos, ready: true });
            if (this.props.yourId && this.props.users[this.props.yourId].subscriptions.includes(parseInt(this.state.creator_id))) {
                this.setState({ subscribed: true })
            }
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
        let subscribeButton = <button id="subscribe-button" onClick={e => this.props.showSignup()}>Subscribe</button>;
        if(this.props.yourId){
            if(this.state.subscribed){
                subscribeButton = <button id="subscribe-button" className="active" onClick={this.toggleSubscription(false)}>Subscribed</button>
            } else {
                subscribeButton = <button id="subscribe-button" onClick={this.toggleSubscription(true)}>Subscribe</button>;
            }
        }

        if(this.props.yourId == this.state.creator_id){
            subscribeButton = <></>
        }

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
                    
                    {subscribeButton}
                </div>
                <h2>Videos</h2>
                <ul>
                    <VideoList filter={this.state.creator.videos}/>
                </ul>
            </div>)
        
    }
}
export default Channel;