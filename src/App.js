import React from "react";
import Navigation from './components/navigation.js'
import SignUpPage from './components/signup.js'
import SignInPage from './components/signin.js'
import Home from './components/home.js'
import * as ROUTES from './constants/routes';
import {fire} from './components/firebase/firebase'
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import  withAuthentication  from './components/authentification';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
    this.authListener = this.authListener.bind(this);
  }
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
render(){
  return (
     <BrowserRouter> 
          <Navigation />
          
          <Switch>
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            {/* <Route
              path={ROUTES.PASSWORD_FORGET}
              component={PasswordForgetPage}
            /> */}
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            
            <Route path={ROUTES.HOME} component={Home} />
          </Switch>
      </BrowserRouter>
  )};

}

export default withAuthentication(App);
