import React from "react";
class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <h2>Recommended</h2>
                <a href="/#/videos/1">Click here for Test Video</a>
                <br />
                <a href="/#/video/new">Upload Video</a>
                <br />
                </>
        );
    }
}

export default HomePage;