import React from 'react';
import { AuthUserContext } from './session/session';
import { withFirebase } from './firebase/firebase';
const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: null,
         };
    }
    
    //AFFICHE UNE ERREUR, je crois que tout vient d'ici, je suis bloqué...
    
    
    
    // componentDidMount() {
    //   this.listener = this.props.firebase.auth.onAuthStateChanged(
    //     authUser => {
    //       authUser
    //         ? this.setState({ authUser })
    //         : this.setState({ authUser: null });
    //     },
    //   );
    // }
    // componentWillUnmount() {
    //   this.listener();
    //}
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