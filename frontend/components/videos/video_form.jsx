import React from "react";
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
        // console.log(file.size);
        if (file.size > fileSizeLimit) {
            e.currentTarget.value = "";
            alert(`Filesize can't be greater than ${fileSizeLimit} bytes`);
        }
        else if (file) {
            reader.onloadend = () => this.setState({ videoURL: reader.result, videoFile: file });
            reader.readAsDataURL(file);
        }
        else {
            this.setState({ videoURL: "", videoFile: null });
        }
    }
    thumbnailPreview(e) {
        const fileSizeLimit = 5000000;
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        if (file.size > fileSizeLimit) {
            e.currentTarget.value = "";
            alert(`Filesize can't be greater than ${fileSizeLimit} bytes`);
        } else if (file) {
            reader.onloadend = () => this.setState({ thumbnailURL: reader.result, thumbnailFile: file });
            reader.readAsDataURL(file);
        }else {
            this.setState({ thumbnailURL: "", thumbnailFile: null });
        }

    }

    clearForm(e){
        e.preventDefault();
        this.setState({ videoURL: "", videoFile: null, title: "", description: "" });
        document.getElementById("video-upload").value = null;
        document.getElementById("thumbnail-upload").value = null;
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[videoFile]', this.state.videoFile);
        formData.append('video[thumbnailFile]', this.state.thumbnailFile);
        this.props.action(formData);
    }
    
    render(){
        let videoForm = <></>
        if (this.state.id || (this.state.videoURL && this.state.thumbnailURL)){
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
                <div style={{ float: 'left' }}>
                        <h2>Video</h2>
                        <input id="video-upload" type="file" onChange={this.videoPreview} />

                </div>
                <div style={{ float: 'left' }} >
                    <h2>Thumbnail</h2>
                    <input id="thumbnail-upload" type="file" onChange={this.thumbnailPreview} />

                </div>
                {videoForm}
            </form>
        </div>
        );
    }
}

export default VideoCreate;