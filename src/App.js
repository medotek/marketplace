import React from "react";
import Navigation from './components/navigation.js'
import SignUpPage from './components/signup.js'
import SignInPage from './components/signin.js'
import Home from './components/home.js'
import * as ROUTES from './constants/routes';
import {withFirebase} from './components/firebase/firebase'
import { AuthUserContext } from './components/session';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }
  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }
  componentWillUnmount() {
    this.listener();
  }
render(){
  return (
    <AuthUserContext.Provider value={this.state.authUser}>
     <BrowserRouter> 
          <Navigation />
          
          <Switch>
            
              <Route path={ROUTES.SIGN_IN}>
                  <SignInPage/>
              </Route>
              <Route path={ROUTES.SIGN_UP}>

                  <SignUpPage />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
      </BrowserRouter>
      </AuthUserContext.Provider>
  )};

}

export default withFirebase(App);
