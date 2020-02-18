import React from "react";
import {profileIcon, thumbsUpIcon, thumbsDownIcon, shareIcon} from "../../icons";
class VideoShow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            videoId: props.video.video.id,
            video: props.video,
            like_dislike: props.video.like_dislike,
            likes: props.video.likes,
            dislikes: props.video.dislikes,
            editMode: false,
            editTitle: "",
            editDescription: "",
        }
        this.finishSetup = this.finishSetup.bind(this);
        this.editField = this.editField.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
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
            const field = (bool) ? "likes" : "dislikes";
            const fieldVal = this.state[field];
            const otherField = (bool) ? "dislikes" : "likes";
            const otherFieldVal = this.state[otherField];
            if (this.state.like_dislike === bool) { //Destroy the like/dislike
                this.setState({ like_dislike: undefined, [field]: (fieldVal-1)})
                // Call Destroy on like_dislike where video_id is this video and user_id is current_user.id

            } 
            else { // Increment field the decrement otherField
                if (this.state.like_dislike !== undefined) { //Decrement otherField
                    this.setState({ [otherField]: otherFieldVal - 1  });
                }
                this.setState({ like_dislike: bool, [field]: fieldVal + 1 })
                // likeable_type: "Video", likeable_id: video.id, like_dislike = bool, user_id: current_user.id
                // sets value at where likeable_id+type = video_id+type and user_id is current_user.id
            } 
        }
    }
    toggleEdit(e){
        e.preventDefault();
        const newState = (this.state.editMode) ? false : true
        this.setState({editMode: newState, editTitle: this.props.video.video.title, editDescription: this.props.video.video.description})
    }
    editField(field){
        return e => this.setState({[field]: e.target.value});
    }
    saveChanges(e){
        e.preventDefault();
        this.props.updateVideo({
            id: this.state.videoId, 
            title: this.state.editTitle,
            description: this.state.editDescription
        });
        this.toggleEdit(e);
    }
    finishSetup() {
        if(!this.props.video){return;}
        const video = document.getElementById('video-player')
        const video_src = document.getElementById('video-src')
        video.pause();
        this.props.getUser(this.props.video.video.creator_id);
        this.setState({ video: this.props.video, 
            like_dislike: this.props.video.like_dislike, 
            likes: this.props.video.likes, 
            dislikes: this.props.video.dislikes
        });
        video_src.setAttribute('src', this.props.video.video.videoUrl);
        video.load();
        video.play();
    }
    componentDidUpdate() {
        if (this.state.videoId != this.props.match.params.videoId){
            this.setState({videoId: this.props.match.params.videoId})
            this.props.getVideo(this.props.match.params.videoId).then(this.finishSetup);
        }
    }
    componentDidMount(){
        this.props.getVideo(this.props.match.params.videoId).then(this.finishSetup);
    }

    render() {
        // if(this.props.error[0] === "Video Not Found"){this.props.history.push("/")}
        if(this.props.video.creator === null){
            return null;
        }

        let thumbsUpClass = "like vid-info-btn";
        let thumbsDownClass = "dislike vid-info-btn";
        if (this.state.like_dislike != undefined){
            thumbsUpClass = (this.state.like_dislike === true) ? "active like vid-info-btn" : "like vid-info-btn";
            thumbsDownClass = (this.state.like_dislike === false) ? "active dislike vid-info-btn" : "dislike vid-info-btn";
        }

        let editButton = <></>
        if (this.props.video.creator.id === this.props.currentUser){
            editButton = <button onClick={this.toggleEdit} style={{ marginLeft: 10 }}>Edit</button>
        }

        let title = <h2 style={{ marginTop: "16px", marginBottom: "8px" }}>{this.props.video.video.title}</h2>;
        let description = <h5 style={{ fontWeight: "400", marginTop: 10 }}>{this.props.video.video.description}</h5>;
        if(this.state.editMode){
            editButton = (<>
                    <button onClick={this.toggleEdit} style={{marginLeft: 10}}>Cancel</button>
                    <button onClick={this.saveChanges} style={{marginLeft: 10}}>Save</button>
            </>)
            title = <input style={{ marginTop: "16px", marginBottom: "8px", fontSize: "1.5em" }} value={this.state.editTitle} onChange={this.editField("editTitle")}/>
            description = <textarea style={{ fontWeight: "400", marginTop: 10, display: "block", width: "100%", height: 50}} value={this.state.editDescription} onChange={this.editField("editDescription")} />
        }
        return (
        <div>
            <div className="video-container">
                <video id='video-player' className="video-show" preload="auto" controls="controls" autoPlay="autoplay">
                    <source id='video-src' src={this.props.video.video.videoUrl}/>
                </video>
                {title}
                <textarea id="current-video-url" className="hidden" defaultValue={window.location.href}/>
                <ul className="video-info">
                    <li style={{color:"gray"}}>9001(fake) views • {this.props.video.video.created_at}</li>
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
                    <a href={`/#/channel/${this.props.video.video.creator_id}`}>{profileIcon("30px")}</a>
                </div>
                <div className="col-4-5" style={{marginTop: "14px"}}>
                    <a href={`/#/channel/${this.props.video.video.creator_id}`} style={{ textDecoration: "none", color: "black"}}>
                        <h3 style={{fontSize: "18px", display: "inline"}}>{this.props.video.creator.username}</h3>
                    </a>
                    {editButton}
                    {description}
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