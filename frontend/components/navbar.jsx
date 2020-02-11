import React from "react";
import LoginModal from "./users/signin_container";
import SignUpModal from "./users/signup_container";
import {LOGIN, SIGN_UP} from "../actions/modal_actions";


const Navbar = props => {
    if(props.user){
        // TODO: props.user.profile_pic when profile pic is working
        return (<nav className="navbar">
                    <img src={window.defaultProfilePicture} style={{ width: "50px" }} />
                    <a>{props.user.username}</a>
                    <ul>
                        <button onClick={props.logout}>Logout</button>
                    </ul>
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