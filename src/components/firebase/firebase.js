import app from 'firebase/app';
import React from 'react';
import firebase from 'firebase';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../session/session';
const config = {
    apiKey: "AIzaSyDUpgb4LHfm6sR_jgOuz2R3fTuAtZEZIBM",
    authDomain: "marketplace-1af40.firebaseapp.com",
    databaseURL: "https://marketplace-1af40.firebaseio.com",
    projectId: "marketplace-1af40",
    storageBucket: "marketplace-1af40.appspot.com",
    messagingSenderId: "299747805663",
    appId: "1:299747805663:web:9f154a5ae329bfb77a5c6a"
  };

  export const FirebaseContext = React.createContext(null);

  export class FirebaseProvider extends React.Component {
    constructor() {
      
      firebase.initializeApp(config);
      this.auth = firebase.default.auth();
      this.db = firebase.default.database();
      this.state = {
        isLogged: true, // pour montrer que ça marche si on est loggué
        articles: 0,
        
      };
     
    }
   
    state = {
      isLogged: true,
      articlePanier: (articles) => this.setState({articles: articles+1})
      // toLogout: () => this.setState({isLogged: false, articles: 0}),
      // toLoginIn: (email) => this.setState({isLogged:true, email : email}),
      // 
      
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
    export const ToConnectWithAuthorization = withAuthentication(ToConnect);
   
    
    class Firebase {
      constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
      }
      
      // *** Auth API ***
      doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
      doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
      doSignOut = () => this.auth.signOut();
      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
      doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
      // *** User API ***
      user = uid => this.db.ref(`users/${uid}`);
      users = () => this.db.ref('users');
    }
    export default Firebase;