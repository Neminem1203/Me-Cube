import React from "react";
class Channel extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        if (this.props.yourId && this.props.yourId == this.props.match.params.channelId){return <h1>Your Channel</h1>}
        return <h1> A Channel </h1>
    }
}
export default Channel;