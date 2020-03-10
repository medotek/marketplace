import React from 'react';
import { withRouter } from 'react-router-dom';
import { withAuthorization } from './authorization.js'
class SignIn extends React.Component {

        state = {email:"",
        password:""}
    
    
    handleInput = (event) => {
        console.log(event.target.name, event.target.value);
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit = () => {
        this.props.toLoginIn();
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <input
                type="text" placeholder="Username" onChange={this.handleInput}
                />
                <input
                type="password" placeholder="Password"
                />
                <button type="submit" onClick={this.handleSubmit}>Login</button>
            </div>
        )
    }
}

export default withRouter(withAuthorization(SignIn));