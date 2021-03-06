import React from "react";
import { uploadVideoIcon, uploadThumbnailIcon } from "../../icons";
class VideoCreate extends React.Component{
    constructor(props){
        super(props);
        this.state=this.props.video;
        this.videoPreview = this.videoPreview.bind(this);
        this.thumbnailPreview = this.thumbnailPreview.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateField(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    videoPreview(e) {
        // e.preventDefault();
        const fileSizeLimit = 50000000;
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        if (file.size > fileSizeLimit) {
            alert(`Filesize can't be greater than ${fileSizeLimit} bytes`);
        } else if (!file.type.match(/^video/)){
            alert("Invalid File Type");
        } else if (file) {
            document.getElementById("video-upload-icon").classList = "active";
            reader.onloadend = () => this.setState({ videoURL: reader.result, videoFile: file });
            reader.readAsDataURL(file);
            return;
        }
        e.currentTarget.value = "";
        this.setState({ videoURL: "", videoFile: null });
    }
    thumbnailPreview(e) {
        const fileSizeLimit = 5000000;
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        if (file.size > fileSizeLimit) {
            e.currentTarget.value = "";
            alert(`Filesize can't be greater than ${fileSizeLimit} bytes`);
        } else if (!file.type.match(/^image/)) {
            alert("Invalid File Type");
        } else if (file) {
            document.getElementById("thumbnail-upload-icon").classList = "active";
            reader.onloadend = () => this.setState({ thumbnailURL: reader.result, thumbnailFile: file });
            reader.readAsDataURL(file);
            return;
        }
        document.getElementById("thumbnail-upload-icon").classList = "";
        e.currentTarget.value = "";
        this.setState({ thumbnailURL: "", thumbnailFile: null });

    }

    clearForm(e){
        e.preventDefault();
        this.setState({ videoURL: "", videoFile: null, title: "", description: "" });
        document.getElementById("video-upload").value = null;
        document.getElementById("thumbnail-upload").value = null;
        document.getElementById("thumbnail-upload-icon").classList = "";
        document.getElementById("video-upload-icon").classList = "";
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[videoFile]', this.state.videoFile);
        formData.append('video[thumbnailFile]', this.state.thumbnailFile);
        this.props.action(formData);
        window.location.href = "/#/";
    }
    
    render(){
        let uploadForm = (
        <>
            <div style={{ float: 'left' }}>
                <h2>Upload a Video</h2>
                <a id="video-upload-icon" onClick={()=>{document.getElementById("video-upload").click()}}>{uploadVideoIcon()}</a>
                <input id="video-upload" type="file" onChange={this.videoPreview} />
            </div>
                <div style={{ marginLeft: 50, float: 'left' }} >
                    <h2>Upload a Thumbnail</h2>
                    <a id="thumbnail-upload-icon" onClick={()=>{document.getElementById("thumbnail-upload").click()}}>{uploadThumbnailIcon()}</a>
                    <input id="thumbnail-upload" type="file" onChange={this.thumbnailPreview} />
            </div>
        </>);
        let videoForm = <></>
        if (this.state.id || (this.state.videoURL && this.state.thumbnailURL)){
            // uploadForm = <></>
            videoForm = (
                <>
                    <div className="publish-btns">
                        <button className="blue-btn"> Publish </button>
                        <button onClick={this.clearForm}>Cancel</button>
                    </div>
                    <div>
                        <video preload="auto" controls="controls" autoPlay="autoplay" style={{ float: "right" }}>
                            <source src={this.state.videoURL} />
                        </video>
                        <br />
                        <input type="text" value={this.state.title} onChange={this.updateField("title")} placeholder="Title" />
                        <br />
                        <textarea value={this.state.description} onChange={this.updateField("description")}
                            style={{ height: 150 }} placeholder="Description" />

                    </div>
                </>)
        }
        return (
        <div>
            <h1>Create New Video</h1>
            <form className="video-form" onSubmit={this.handleSubmit}>
                {uploadForm}
                {videoForm}
            </form>
        </div>
        );
    }
}

export default VideoCreate;