import React from "react";
import { LOGIN, SIGN_UP } from "../../actions/modal_actions";
import { login } from "../../actions/users_actions";
class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
    }

    updateField(field){
        return e => this.setState({[field]: e.target.value});
    }

    render(){
        let extraField = <></>;
        const otherForm = (this.props.formType === LOGIN) ? SIGN_UP : LOGIN;
        if(this.props.formType === SIGN_UP){
            extraField = 
            <>
                <input type="text" onChange={this.updateField("email")} value={this.state.email} placeholder="Email"/>
                <br />
            </>;
        }
        return (
            <>
                <div className="user-form">
                    <div>
                        <button onClick={()=>{this.props.showModal(otherForm)}}> {otherForm} </button>
                        <a onClick={this.props.demo}>Demo</a>
                        <a onClick={()=>this.props.showModal("")}> x</a>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <h1>User {this.props.formType}</h1>
                        {extraField}
                        <input placeholder="Username" type="text" onChange={this.updateField("username")} value={this.state.username} />
                        <br />
                        <input placeholder="Password" type="password" onChange={this.updateField("password")} value={this.state.password} />
                        <br />
                        <button className="user-submit-btn">{this.props.formType}</button>
                    </form>
                </div>
            </>
        );
    }
}

export default UserForm;