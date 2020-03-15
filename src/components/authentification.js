import React from 'react';
import { AuthUserContext } from './session/session';
import { withFirebase } from './firebase/firebase';
import {fire} from './firebase/firebase'
const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: null,
         };
      this.authListener = this.authListener.bind(this);
    }
    
    //AFFICHE UNE ERREUR, je crois que tout vient d'ici, je suis bloqué...
    //sinon me déclare que le this.props.firebase est null
    
    
    componentDidMount() {
      this.authListener();
      
    }
    authListener() {
      fire.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          this.setState({ authUser });
        } else {
          this.setState({ authUser: null });
        }
      })
    }
    
    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }
  return withFirebase(WithAuthentication);
};
export default withAuthentication;

export { AuthUserContext, withAuthentication };