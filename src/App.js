import React from "react";
import Navigation from './components/navigation.js'
import SignIn from './components/signin.js'
import SignUp from './components/signup.js'
import Home from './components/home.js'

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import {AuthorizationProvider, withAuthorization} from "./components/authorization.js";

const SignIn2 = withAuthorization(SignIn);

class App extends React.Component {

  state = {  
  }
 
render(){
  return (
    <AuthorizationProvider >
      <BrowserRouter> 
          <Navigation />
          
          <Switch>
            
              <Route path="/signin">
                  <SignIn/>
              </Route>
              <Route path="/signup">

                  <SignUp />
              </Route>
              <Route path="/">
                  <Home status={this.isLogged}/>
              </Route>
          </Switch>
      </BrowserRouter>
    </AuthorizationProvider>
  )};
}

export default App;
