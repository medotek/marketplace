import React from 'react'
export const AuthorizationProvider = React.Component {
    state = {
    isLogged: false,
    toLoginIn: () => this.setState({isLogged:true})       
    };
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

    class AmILogged extends React.Component {
        render () {
            return (
                <h1>{this.props.isLogged}</h1>
            )
        }
    }
   class ToConnect extends React.Component {
       render () {
           return (
               <button onClick={this.props.toLoginIn}>Se Connecter</button>
           )
       }
   }
   const ToConnectWithAuthorization = withAuthorization(ToConnect);

