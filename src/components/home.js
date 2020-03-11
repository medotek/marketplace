import React from 'react';
import { withAuthorization} from './authorization.js'
class Home extends React.Component {
    state = {email:"",
    password:""}

    render() {
        return (
            <h1>{this.props.isLogged ? 'Bienvenue ' + this.props.email : 'Bonjour, Veuillez vous connecter'}</h1>
            
        )
    }
}
export default withAuthorization(Home);