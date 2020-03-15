import app from 'firebase/app';
import React from 'react';
import firebase from 'firebase';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../session/session';
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKE,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID
  };

//Il semblerait que j'ai mal configuré firebase
  const fire = firebase.initializeApp(config);
 
  export const FirebaseContext = React.createContext(null);

  export class FirebaseProvider extends React.Component {
    constructor() {
      
      firebase.initializeApp(config);
      this.auth = firebase.default.auth();
      this.db = firebase.default.database();
      this.state = {
        isLogged: false,
        articles: 0,
        
      };
     
    }
   
    state = {
      isLogged: true,
      articlePanier: (articles) => this.setState({articles: articles+1}) // Le panier est censé marché si on est loggué or je n'ai pas eu l'occasion de le tester avec firebase
      // toLogout: () => this.setState({isLogged: false, articles: 0}),
      // toLoginIn: (email) => this.setState({isLogged:true, email : email}),
      // 
      
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
    export {fire};