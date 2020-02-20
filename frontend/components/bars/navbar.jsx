import React from "react";
import LoginModal from "../users/signin_container";
import SignUpModal from "../users/signup_container";
import { LOGIN, SIGN_UP, ACCOUNT_DETAILS } from "../../actions/modal_actions";
import { Link } from "react-router-dom";
import { channelIcon, githubIcon, linkedInIcon, exitIcon, profileIcon, uploadIcon } from "../../icons";


const Navbar = props => {
    if(props.user){
        let modal = <></>
        let picture_function = () => props.showModal(ACCOUNT_DETAILS);
        if(props.modal === ACCOUNT_DETAILS){
            modal = (
            <>
                <div className="navbar-background" onClick={()=>props.showModal("")} style={{opacity: "50%"}}>

                </div>
                <ul className="account-navbar">
                    <div style={{boxSizing: "border-box", margin: "0", padding:"6px", borderBottom: "1px solid gray"}}>
                        <a style={{paddingLeft: "5px", marginBottom: "0", fontSize: "25px",fontWeight: "700"}}>{props.user.username}</a>
                        <br />
                        <a style={{paddingLeft: "5px", fontSize: "18px", paddingBottom: "5px"}}>{props.user.email}</a>
                    </div>
                    <Link to={`/channel/${props.user.id}`} onClick={()=>props.showModal("")}>
                        <li style={{paddingLeft:7}}>
                            {channelIcon(30)}
                            <span>Your Channel</span>
                        </li>
                    </Link>
                    <a href="/#/user/edit" onClick={() => props.showModal("")}>
                        <li>
                            {profileIcon(25)}
                            <span>Your Account</span>
                        </li>
                    </a>
                        <a target="_blank" href="https://github.com/Neminem1203/Me-Cube" onClick={() => props.showModal("")}>
                        <li>
                            {githubIcon()}
                            <span>GitHub</span>
                        </li>
                    </a>
                        <a target="_blank" href="https://linkedin.com/in/tpaul1203" onClick={() => props.showModal("")}>
                        <li>
                            {linkedInIcon()}
                            <span>LinkedIn</span>
                        </li>
                    </a>
                    <a onClick={()=> {
                        props.showModal("");
                        props.logout();
                    }}>
                        <li>
                            {exitIcon()}
                            <span>Logout</span>
                        </li>
                    </a>
                        
                </ul> </>)
            picture_function = () => props.showModal("");
        }
        let imgSrc = <a id="profile-btn" onClick={picture_function}>{profileIcon(40)}</a>
        if(props.user.profile_picture){imgSrc = <img src={props.user.profile_picture} className="current-user-icon" onClick={picture_function}/>}
        return (<nav className="navbar">
                    <a href="/#/video/new" className="upload-video-btn" style={{fontSize: 12, textAlign: "center"}}>{uploadIcon(25)}<br/>Upload</a>
                    {/* <img src={imgSrc} style={{ width: "60px", height: "60px" }} onClick={picture_function} /> */}
                    {imgSrc}
                    {modal}
                </nav>)
    }
    if(props.modal === SIGN_UP){
        return <SignUpModal showModal={props.showModal}/>
    }
    else if(props.modal === LOGIN){
        return <LoginModal showModal={props.showModal}/>
    }
    else{
        return (
            <>
            <nav className="navbar">
                <button onClick={()=>props.showModal(LOGIN)}>SIGN IN</button>
            </nav>
            </>
        )
        }
}
    

export default Navbar;