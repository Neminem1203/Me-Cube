import React from "react";
import LoginModal from "../users/signin_container";
import SignUpModal from "../users/signup_container";
import { LOGIN, SIGN_UP, ACCOUNT_DETAILS } from "../../actions/modal_actions";
import { Link } from "react-router-dom";
import { channelIcon, githubIcon, linkedInIcon, exitIcon } from "../../icons";


const Navbar = props => {
    if(props.user){
        let modal = <></>
        let picture_function = () => props.showModal(ACCOUNT_DETAILS);
        if(props.modal === ACCOUNT_DETAILS){
            modal = (
            <>
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
                        <a target="_blank" href="https://www.github.com/neminem1203" onClick={() => props.showModal("")}>
                        <li>
                            {githubIcon()}
                            <span>GitHub</span>
                        </li>
                    </a>
                        <a target="_blank" href="https://sg.linkedin.com/in/tpaul1203" onClick={() => props.showModal("")}>
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
        // TODO: props.user.profile_pic when profile pic is working
        return (<nav className="navbar">
                    <img src={window.defaultProfilePicture} style={{ width: "50px" }} onClick={picture_function}/>
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
            <nav className="navbar">
                <button onClick={()=>props.showModal(LOGIN)}>SIGN IN</button>
            </nav>
        )
        }
}
    

export default Navbar;