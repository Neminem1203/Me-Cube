import React from "react";
class VideoCreate extends React.Component{
    constructor(props){
        super(props);
        this.state=this.props.video;
        this.videoPreview = this.videoPreview.bind(this);
    }

    videoPreview(e) {
        // e.preventDefault();
        const fileSizeLimit = 5000000;
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        // console.log(file.size);
        if (file.size > fileSizeLimit) {
            e.currentTarget.value = "";
            alert(`Filesize can't be greater than ${fileSizeLimit} bytes`)
        }
        else if (file) {
            reader.onloadend = () => this.setState({ videoURL: reader.result, videoFile: file });
            reader.readAsDataURL(file);
        }
        else {
            this.setState({ videoURL: "", videoFile: null });
        }
    }

    updateField(field){
        return e => this.setState({[field]: e.target.value})
    }

    render(){
        let videoForm = <></>
        if(this.state.id || this.state.videoURL){
            console.log("test");
            videoForm = (
            <>
                <div className="publish-btns">
                    <button className="blue-btn"> Publish </button>
                    <form action="/#/"><button>Cancel</button></form>
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
            <form className="video-form">
                <input type="file" onChange={this.videoPreview} style={{float: 'left'}}/>
                {videoForm}
            </form>
        </div>
        );
    }
}

export default VideoCreate;