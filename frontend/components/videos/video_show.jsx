import React from "react";
class VideoShow extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<video preload="auto" controls="controls" autoPlay="autoplay" muted="muted">
             <source src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Caminandes-_Llama_Drama_-_Short_Movie.ogv"/>
                 </video>)
    }
}

export default VideoShow;