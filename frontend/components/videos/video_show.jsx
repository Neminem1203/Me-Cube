import React from "react";
import {profileIcon, thumbsUpIcon, thumbsDownIcon, shareIcon} from "../../icons";
import VideoList from "./video_list_container";
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
            showComments: false,
            commentsLoaded: false,
        }
        this.finishSetup = this.finishSetup.bind(this);
        this.editField = this.editField.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.showComments = this.showComments.bind(this);
        this.commentsLoaded = this.commentsLoaded.bind(this);
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
            const like =(bool) => ({ likeable_type: "Video", likeable_id: this.state.videoId, user_id: this.props.currentUser , like_dislike: bool});
            const field = (bool) ? "likes" : "dislikes";
            const fieldVal = this.state[field];
            const otherField = (bool) ? "dislikes" : "likes";
            const otherFieldVal = this.state[otherField];
            if (this.state.like_dislike === bool) { //Destroy the like/dislike
                this.setState({ like_dislike: undefined, [field]: (fieldVal-1)})
                // Call Destroy on like_dislike where video_id is this video and user_id is current_user.id
                this.props.destroyLike(like())
            } 
            else { // Increment field the decrement otherField
                let method = "create";
                if (this.state.like_dislike !== undefined) { //Decrement otherField
                    this.setState({ [otherField]: otherFieldVal - 1  });
                    method = "update";// UPDATE
                }
                this.setState({ like_dislike: bool, [field]: fieldVal + 1 })
                if(method === "create"){
                    this.props.createLike(like(bool))
                } else {
                    this.props.updateLike(like(bool))
                }
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
        this.setState({ editMode: false });
        if(this.props.video.creator.id !== this.props.currentUser){return;}
        else {
            this.props.updateVideo({
                id: this.state.videoId,
                title: this.state.editTitle,
                description: this.state.editDescription
            });
        }
    }
    showComments(e){
        // console.log(e.target.scrollTop);
        // console.log(commentSection.offsetParent.offsetHeight);
        // console.log(commentSection.offsetTop);
        if (!this.state.showComments) {
            const commentSection = document.getElementById("comment-section");
            if (e.target.scrollTop + commentSection.offsetParent.offsetHeight
                > commentSection.offsetTop) {
                if(this.state.video.video.comments !== undefined){
                    // ajax request to get comments
                    // on dismount, should clear comments
                    this.props.getComments(this.state.video.video.comments).then(payload=>{
                        this.props.getUsers(Object.values(payload.comments).map(comment => comment.commenter_id)).then(
                            () => this.commentsLoaded()
                        )
                    });
                }
                this.setState({showComments: true});
            }
        }
    }
    commentsLoaded(){
        this.setState({commentsLoaded: true});
    }
    finishSetup() {
        if(!this.props.video){return;}
        const video = document.getElementById('video-player')
        const video_src = document.getElementById('video-src')
        if(video !== null){video.pause();}
        this.props.getUser(this.props.video.video.creator_id);
        this.setState({ 
            video: this.props.video, 
            like_dislike: this.props.video.like_dislike, 
            likes: this.props.video.likes, 
            dislikes: this.props.video.dislikes,
        });
        if (video !== null) {
            video_src.setAttribute('src', this.props.video.video.videoUrl);
            video.load();
            video.play();
        }
    }
    componentDidUpdate() {
        if (this.state.videoId != this.props.match.params.videoId){
            this.setState({
                videoId: this.props.match.params.videoId, 
                editMode: false, 
                showComments: false,
                commentsLoaded: false,
            })
            this.props.getVideo(this.props.match.params.videoId).then(this.finishSetup);
        }
    }
    componentDidMount(){
        this.props.getVideo(this.props.match.params.videoId).then(this.finishSetup);
        const mainContent = document.getElementsByClassName("main-content")[0];
        mainContent.classList.add("video-page");
        mainContent.addEventListener("scroll", this.showComments);

    }

    componentWillUnmount(){
        document.getElementsByClassName("main-content")[0].classList.remove("video-page")
        this.props.clearComments();
    }

    render() {
        // if(this.props.error[0] === "Video Not Found"){this.props.history.push("/")}
        // return null if video doesn't have a creator (meaning video doesn't exist)
        if(this.props.video.creator === null){
            return null;
        }
        // video likes and dislikes
        if (this.state.likes === undefined && this.props.video.likes){
            this.setState({ likes: this.props.video.likes, dislikes: this.props.video.dislikes, like_dislike: this.props.video.like_dislike})
        }
        let thumbsUpClass = "like vid-info-btn";
        let thumbsDownClass = "dislike vid-info-btn";
        if (this.state.like_dislike != undefined && this.props.currentUser){
            thumbsUpClass = (this.state.like_dislike === true) ? "active like vid-info-btn" : "like vid-info-btn";
            thumbsDownClass = (this.state.like_dislike === false) ? "active dislike vid-info-btn" : "dislike vid-info-btn";
        }
        // edit mode only valid for creator
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
            title = <input style={{ marginTop: "16px", marginBottom: "8px", fontSize: "1.5em", width: "100%" }} value={this.state.editTitle} onChange={this.editField("editTitle")}/>
            description = <textarea style={{ fontWeight: "400", marginTop: 10, display: "block", width: "100%", height: 50, resize: "vertical"}} value={this.state.editDescription} onChange={this.editField("editDescription")} />
        }

        // like and comment functionality for signed in users
        let likeFnc = this.thumbAction(true);
        let dislikeFnc = this.thumbAction(false);
        // const commentFnc = this.createComment;
        // TODO: once add comment btn is done
        if (this.props.currentUser === null){
            likeFnc = this.props.showSignup;
            dislikeFnc = this.props.showSignup;
            // const commentFnc = this.props.showSignup;
        }

        // comment section
        let commentSection = (
            <>
                <h1> Comments </h1>
                <div id="comment-section" className="comment">
                    <h1>Loading . . .</h1>
                </div>
            </>)
        if(this.state.commentsLoaded){
            const comments = Object.values(this.props.comments).map(comment=>{
                return (
                    <li key={comment}>
                        <h3>{this.props.users[comment.commenter_id].username}</h3>
                        <h5>{comment.comment}</h5>
                    </li>
                )
            })
            commentSection = (
            <>
                <h1> Comments </h1>
                <div id="comment-section" className="comment">
                    <ul style={{listStyle: "none"}}>
                        {comments}
                    </ul>

                </div>
            </>
            )
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
                    <li style={{color:"gray"}}>9.1M(fake) views • {this.props.video.video.created_at}</li>
                    <li>
                        <div onClick={likeFnc} className={thumbsUpClass}>
                            {thumbsUpIcon(20)}
                            <span>{this.state.likes}</span>
                        </div>
                        <div onClick={dislikeFnc} className={thumbsDownClass}>
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
                    <br />
                    <div style={{width: "100%", borderBottom: "1px solid black"}}></div>
                    {commentSection}
                </div>
            </div>
            <div className="video-recommendations">
                <span>Recommendation</span>
                <VideoList currentVideo={this.state.videoId}/>
            </div>
        </div>
        )
    }
}

export default VideoShow;