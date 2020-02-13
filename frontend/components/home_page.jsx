import React from "react";
class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <h2>Recommended</h2>
                <a href="/#/video/1">Click here for Test Video</a>
            </>
        );
    }
}

export default HomePage;