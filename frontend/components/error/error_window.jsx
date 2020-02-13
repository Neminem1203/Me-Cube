import React from "react";
class ErrorWindow extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const errors = Object.values(this.props.errors).map(error => (error !== null) ? <li>{error}</li> : null);
        if(Object.values(this.props.errors).every(error => error === null)){return <div id="error-window"><span>Closing Window</span></div>}
        return(
            <div id="error-window" className="active">
                <span>
                    Error: 
                    <ul>
                        {errors}
                    </ul>
                </span>
            </div>
        )
    }
}
export default ErrorWindow;