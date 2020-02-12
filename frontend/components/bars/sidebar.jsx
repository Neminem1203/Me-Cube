import React from "react";

const sidebarToggle = (cb) =>{
    cb();

    const logo = document.getElementById("me-cube-logo");
    if (logo.classList.contains("active")){
        logo.classList.remove("active");
    } else {
        logo.classList.add("active");
    }
}

export default (props) =>{
    const sidebarClass = (props.sidebar) ? "sidebar" : "sidebar active";
    let channelButton = <></>;
    if (props.channelId){
        channelButton = <a href={`/#/channel/${props.channelId}`}><li><img src={window.channelIcon} style={{ width: "35px" }} />Channel</li></a>
    }
    return (
        <div className={sidebarClass}>
            <a onClick={() => sidebarToggle(props.sidebarToggle)}><img src={window.menuIcon}/></a>
            <ul>
                <a href="/#/"><li><img src={window.homeIcon} />Home</li></a>
                {channelButton}
                <a target="_blank" href="https://www.github.com/neminem1203"><li><img src={window.githubIcon}/>GitHub</li></a>
                <a target="_blank" href="https://sg.linkedin.com/in/tpaul1203"><li><img src={window.linkedinIcon}/>LinkedIn</li></a>
            </ul>
        </div>
    )
}