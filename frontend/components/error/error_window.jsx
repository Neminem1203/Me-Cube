import React from "react";
class ErrorWindow extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        if(this.props.errorMsg === ""){return <div id="error-window"><span>Closing Window</span></div>}
        return(
            <div id="error-window" className="active">
                <span>
                    Error: {this.props.errorMsg}
                </span>
            </div>
        )
    }
}
export default ErrorWindow;