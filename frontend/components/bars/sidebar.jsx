import React from "react";



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
        if(this.props.location.pathname === "/")
            {homeClass = "active";}
        if (this.props.location.pathname === "/channel/"+this.props.channelId)
            {channelClass = "active";}

        let channelButton = <></>;
        if (this.props.channelId)
            {channelButton = <a href={`/#/channel/${this.props.channelId}`}><li className={channelClass}><img src={window.channelIcon}/>Channel</li></a>}
        
        return (
            <div className={sidebarClass}>
                <a onClick={() => this.sidebarToggle(this.props.sidebarToggle)}><img src={window.menuIcon}/></a>
                <ul>
                    <a href="/#/"><li className={homeClass}><img src={window.homeIcon}/>Home</li></a>
                    {channelButton}
                    <a target="_blank" href="https://www.github.com/neminem1203"><li><img src={window.githubIcon}/>GitHub</li></a>
                    <a target="_blank" href="https://sg.linkedin.com/in/tpaul1203"><li><img src={window.linkedinIcon}/>LinkedIn</li></a>
                </ul>
            </div>
        )
    }
}
export default Sidebar;