import React from "react";
import LoginModal from "./users/signin_container";
import SignUpModal from "./users/signup_container";
import {LOGIN, SIGN_UP, ACCOUNT_DETAILS} from "../actions/modal_actions";
import { Link } from "react-router-dom";


const Navbar = props => {
    if(props.user){
        let modal = <></>
        let picture_function = () => props.showModal(ACCOUNT_DETAILS);
        if(props.modal === ACCOUNT_DETAILS){
            modal = (
            <>
                <ul className="account-navbar">
                    <h4>Username: {props.user.username}</h4>
                    <h4>{props.user.email}</h4>
                    <Link to={`/channel/${props.user.id}`}>
                        <li>
                            <img src={window.channelIcon} />
                            <span>Your Channel</span>
                        </li>
                    </Link>
                    <a href="https://www.github.com/neminem1203">
                        <li>
                            <img src={window.githubIcon}/>
                            <span>GitHub</span>
                        </li>
                    </a>
                    <a href="https://sg.linkedin.com/in/tpaul1203">
                        <li>
                            <img src={window.linkedinIcon}/>
                            <span>LinkedIn</span>
                        </li>
                    </a>
                    <a href="#" onClick={props.logout}>
                        <li>
                            <img src={window.logOutIcon}/>
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