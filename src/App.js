import React from "react";
import Navigation from './components/navigation.js'
import SignIn from './components/signin.js'
import SignUp from './components/signup.js'
import Home from './components/home.js'
import {AuthorizationContext} from './components/authorization.js'

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Authorization from "./components/authorization.js";

class App extends React.Component {
 
render(){
  return (
    <AuthorizationContext.Provider value={Authorization}>
    <BrowserRouter> 
        <Navigation />
        <Switch>
           
            <Route path="/signin">
                <SignIn toLoginIn={}/>
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>
            <Route path="/">
                <Home status={this.isLogged}/>
            </Route>
        </Switch>
    </BrowserRouter>
    </AuthorizationContext.Provider>
  )};
}

export default App;