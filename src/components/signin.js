import React from 'react';
import { withRouter } from 'react-router-dom';
import { withAuthorization, AuthorizationProvider,ToConnectWithAuthorization, AmILoggedWithAuthorization } from './authorization.js';
import {compose} from 'recompose';
class SignIn extends React.Component {

        state = {email:"",
        password:""}
    
    
    handleInput = (event) => {

        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit = (event) => {
        console.log("state signin", this.state,);
        
        event.preventDefault();
        this.props.toLoginIn(this.state.email);
        this.props.history.push("/");
    }
    render() {
        return (
            
            <form>
                <AmILoggedWithAuthorization/>
                <h1>Sign In</h1>
                <input
                type="text" name="email" placeholder="Username" onChange={this.handleInput}
                />
                <input
                type="password" placeholder="Password"
                />
                <div onClick={this.handleSubmit}><ToConnectWithAuthorization /></div>
            </form>
        )
    }
}

export default compose(
    withRouter,
    withAuthorization
)(SignIn);