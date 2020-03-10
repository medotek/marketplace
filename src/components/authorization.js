import React from 'react'
    class Authorization {
    
    isLogged = false;
    toLoginIn = () => this.isLogged = true
    
    
}
    export default Authorization;
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
   


