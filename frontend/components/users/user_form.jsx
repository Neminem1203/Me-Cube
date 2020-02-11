import React from "react";
class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.credentials;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
    }

    updateField(field){
        return e => this.setState({[field]: e.target.value});
    }

    render(){
        return null;
    }
}

export default UserForm;