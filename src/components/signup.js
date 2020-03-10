import React from 'react';
class SignUn extends React.Component {

    render() {
        return (
            <form>
                <h1>Sign Up</h1>
                <input
                type="text" placeholder="Username"
                />
                <input
                type="password" placeholder="Password"
                />
                <button type="submit">Create a new account</button>
            </form>
        )
    }
}
export default SignUn;