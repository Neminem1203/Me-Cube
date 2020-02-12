import React from "react";
class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <h1>HomePage</h1>
                <a href="/#/video/1">Click here for Test Video</a>
            </>
        );
    }
}

export default HomePage;