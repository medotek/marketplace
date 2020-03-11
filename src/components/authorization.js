import React from 'react'
import { withRouter } from 'react-router-dom';
export class AuthorizationProvider extends React.Component {
    state = {
        isLogged: false,
        email:"",
        toLoginIn: (email) => this.setState({isLogged:true, email : email})    
        }
    render () {
        return (
            <AuthorizationContext.Provider value={this.state}>
                { this.props.children }
            </AuthorizationContext.Provider>
        )
    }
    
}

    export const AuthorizationContext = React.createContext(null);
    export const withAuthorization = (Component) => {
        class NewComponent extends Component {
            render() {
                return(
                    <AuthorizationContext.Consumer>
                        {value => <Component {... value}{... this.props}/>}
                    </AuthorizationContext.Consumer>
                )

            }

            
        }
        return NewComponent;
    }
    export class AmILogged extends React.Component {
        render () {
            return (
                <h1>{this.props.isLogged ? 'Connecté' : 'Déconnecté'}</h1>
            )
        }
    }
    export const AmILoggedWithAuthorization = withAuthorization(AmILogged);
    class ToConnect extends React.Component {
       render () {
           return (
               <button onClick={this.props.toLoginIn} type="submit">Se Connecter</button>
           )
       }
    }
    export const ToConnectWithAuthorization = withAuthorization(ToConnect);


