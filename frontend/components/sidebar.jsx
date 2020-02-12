import React from "react";


export default (props) =>{
    const sidebarClass = (props.sidebar) ? "sidebar" : "sidebar active";
    let channelButton = <></>;
    if (props.channelId){
        channelButton = <a href={`/#/channel/${props.channelId}`}><li><img src={window.channelIcon} style={{ width: "35px" }} />Channel</li></a>
    }
    return (
        <div className={sidebarClass}>
            <a onClick={props.sidebarToggle}><img src={window.menuIcon}/></a>
            <ul>
                {channelButton}
                <a href="https://www.github.com/neminem1203"><li><img src={window.githubIcon} style={{ width: "35px"}} />GitHub</li></a>
                <a href="https://sg.linkedin.com/in/tpaul1203"><li><img src={window.linkedinIcon} style={{ width: "35px"}} />LinkedIn</li></a>
            </ul>
        </div>
    )
}