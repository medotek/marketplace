import React from 'react'
export const AuthorizationProvider = React.Component {
    state = {
    isLogged = false;
    toLoginIn = () => this.isLogged = true        
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
                        {value => <Component {... value}/>}
                    </AuthorizationContext.Consumer>
                )

            }

            
        }
        return NewComponent;
    }
   


