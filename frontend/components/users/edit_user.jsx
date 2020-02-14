import React from "react";
class EditUser extends React.Component{
    constructor(props){
        super(props);
        const uname = (props.user) ? props.user.username : ""
        this.state={
            username: uname,
            profilePicURL: "",
            profilePicFile: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.picturePreview = this.picturePreview.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', this.state.username)
        if(this.state.profilePicFile){
            formData.append('profilePicFile', this.state.profilePicFile);
        }
        // ajax request here
        // this.props.updateUser(formData);
    }

    updateUsername(e){
        this.setState({username: e.target.value})
    }

    picturePreview(e){
        // e.preventDefault();
        const reader = new FileReader();
        const file =  e.currentTarget.files[0];
        if (file) {
            reader.onloadend = () => this.setState({ profilePicURL: reader.result, profilePicFile: file });
            reader.readAsDataURL(file); 
        }
        else {
             this.setState({profilePicURL: window.defaultProfilePicture, imageFile: null});
        } 
    }
    componentDidMount() {
        this.setState({username: this.props.user.username})
    }

    render() {
        let profilePic = <div>
            <img height="60px" width="60px" 
            src={(this.props.user.profilePicURL) ? this.props.user.profilePicURL  :window.defaultProfilePicture} >
                                </img></div>;
        if (this.state.profilePicFile) { 
            profilePic = (
            <div>
                <img height="60px" width="60px" src={this.state.profilePicURL} />
            </div>
            )
        }

        let profileInput = <input type="file" onChange={this.picturePreview}></input>


        let usernameField = <input type="text" value={this.state.username} placeholder="Username" onChange={this.updateUsername}/>;
        if(this.props.user && this.props.user.email === "testing@testing.com"){
            profileInput = null;
            usernameField = <input type="text" disabled defaultValue={this.props.user.username} />
        }

        return(
        <div className="account-info">
            <div>
                <h2> Profile Picture </h2>
                {profilePic}
                <br />
                {profileInput}
            </div>
            <div>
                <h2>User Information</h2>
                <form style={{width: "30%"}}onSubmit={this.handleSubmit}>
                    <label>
                        Username: {usernameField}
                    </label>
                    <br />
                    <button style={{marginTop: "10px", float: "right"}} onClick={(e)=>{
                        const btn = e.target;
                        btn.textContent = "Saving";
                        btn.setAttribute("disabled", "true")
                        debugger
                    }}>Save</button>
                </form>
            </div>
        </div>)
    }
}
export default EditUser;