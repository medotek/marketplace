import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from './signup';
import { withFirebase } from './firebase/firebase';
import * as ROUTES from '../constants/routes';
import Grid from '@material-ui/core/Grid';
const SignInPage = () => (
  <Grid 
  container
  direction="row"
  justify="center"
  alignItems="center"
  >
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>
  </Grid>
);
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
     
      <form onSubmit={this.onSubmit}>
        <Grid xs={12}>
        <input
        className="input"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        </Grid>
        <Grid xs={12}>
        <input
        className="input"
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        </Grid>
        <Grid xs={12} className="center">
        <button className="button" disabled={isInvalid} type="submit">
          Sign In
        </button>
        </Grid>
        {error && <p>{error.message}</p>}
      </form>
     
    );
  }
}
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
export default SignInPage;