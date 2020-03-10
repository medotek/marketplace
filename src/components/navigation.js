import React from 'react';
import { Link }  from 'react-router-dom';
class Navigation extends React.Component {


    
    render() {
        return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signin">SignIn</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
        </ul>
        )
    }
}
export default Navigation;