import app from 'firebase/app';
import React from 'react';
import firebase from 'firebase';
import * as ROUTES from '../../constants/routes';
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  };
  
  export const FirebaseContext = React.createContext(null);

  export class FirebaseProvider extends React.Component {
    constructor() {
      
      app.initializeApp(config);
      this.auth = firebase.default.auth();
      this.db = firebase.default.database();
      this.state = {
        isLogged: false
      };
     
    }
    state = {
      articles: 0,
      // toLogout: () => this.setState({isLogged: false, articles: 0}),
      // toLoginIn: (email) => this.setState({isLogged:true, email : email}),
      // articlePanier: (articles) => this.setState({articles: articles+1})
      
    }
    componentDidMount() {
        this.listener = firebase.onAuthUserListener(
          authUser => {
            if (!!authUser) {
              this.props.history.push(ROUTES.SIGN_IN);
            }
          },
          () => this.props.history.push(ROUTES.SIGN_IN),
        );
      }
    
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();
  
    render () {
      return (
        <FirebaseContext.Provider value={this.state}>
          {this.props.children}
        </FirebaseContext.Provider>
      );
    }
  }
  
  
  export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );

  export class AmILogged extends React.Component {
    render () {
        return (
            <span>{this.props.isLogged ? 'Connecté' : 'Déconnecté'}</span>
        )
    }
}
export const AmILoggedWithAuthorization = withFirebase(AmILogged);
    class ToConnect extends React.Component {
       render () {
           return (
               <button onClick={this.props.toLoginIn} type="submit">Se Connecter</button>
           )
       }
    }
    export const ToConnectWithAuthorization = withFirebase(ToConnect);
   