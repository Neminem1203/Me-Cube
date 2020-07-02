import React from "react";
import {homeIcon, channelIcon, githubIcon, linkedInIcon, menuIcon, creditsIcon, subscriptionIcon} from "../../icons";


class Sidebar extends React.Component{
    constructor(props){
        super(props);
    }
    
    sidebarToggle(cb){
        cb();
        const logo = document.getElementById("me-cube-logo");
        if (logo.classList.contains("active")) {
            logo.classList.remove("active");
        } else {
            logo.classList.add("active");
        }
    }
    render(){
        const sidebarClass = (this.props.sidebar) ? "sidebar" : "sidebar active";
        
        let homeClass = "";
        let channelClass = "";
        let subscriptionClass = "";
        let creditClass = "";
        if(this.props.location.pathname === "/")
            {homeClass = "active";}
        else if (this.props.location.pathname === "/channel/"+this.props.channelId)
            {channelClass = "active";}
        else if (this.props.location.pathname === "/subscriptions/")
            {subscriptionClass = "active";}
        else if (this.props.location.pathname === "/credits/")
            {creditClass ="active";}

        let channelButton = <></>;
        let subscriptions = <></>;
        if (this.props.channelId){
            channelButton = <a href={`/#/channel/${this.props.channelId}`}><li className={channelClass}>{channelIcon()} Channel</li></a>
        subscriptions = <a href='/#/subscriptions/'><li className={subscriptionClass}>{subscriptionIcon()} Subscription</li></a>
        }
        
        return (
            <div className={sidebarClass}>
                <a onClick={() => this.sidebarToggle(this.props.sidebarToggle)} className="menu-button">{menuIcon()}</a>
                <ul>
                    <a href="/#/"><li className={homeClass}>
                        {homeIcon()}Home
                    </li></a>
                    {channelButton}
                    {subscriptions}
                    <a target="_blank" href="https://github.com/Neminem1203/Me-Cube"><li>{githubIcon()}GitHub</li></a>
                    <a target="_blank" href="https://linkedin.com/in/tpaul1203"><li>{linkedInIcon()}LinkedIn</li></a>
                    <a href="/#/credits/"><li className={creditClass}>{creditsIcon()}Credits</li></a>
                </ul>
            </div>
        )
    }
}
export default Sidebar;