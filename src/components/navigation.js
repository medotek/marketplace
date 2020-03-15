import React from 'react';
import { Link }  from 'react-router-dom';
import panier from '../images/panier.svg';
import Button from '@material-ui/core/Button';
import { AmILoggedWithAuthorization } from './firebase/firebase'
import * as ROUTES from '../constants/routes';
import {withFirebase} from './firebase/firebase'
import SignOutButton from './signout';
class Navigation extends React.Component {

/*<Button>Default</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button disabled>Disabled</Button>
<Button href="#text-buttons" color="primary">
  Link
</Button>*/ 
    
    render() {
        return (
        <div class="menu">
            <ul >
                <li><Button variant="outlined"><Link to="/">Home</Link></Button></li>
                {this.props.isLogged ? '' : <li><Link to={ROUTES.SIGN_IN}> <Button variant="outlined">Connexion</Button></Link></li>}
                {this.props.isLogged ? <li> <Link to='/' onClick={this.props.toLogout}><Button variant="outlined">Déconnexion</Button></Link></li> : '' }
                {this.props.isLogged ? '' : <li><Link to={ROUTES.SIGN_UP}><Button variant="outlined">Inscription</Button></Link></li>}
                <span class='panier'> <Link to='/'>  <img src={panier} className="caddie" alt="logo" /> {this.props.articles} </Link> </span> 
                {this.props.isLogged ? <Button color="primary"><li class="amilogged">Bonjour {this.props.email}, vous êtes <AmILoggedWithAuthorization/></li></Button> : <Button color="secondary"><li class="amilogged"><AmILoggedWithAuthorization/></li></Button>}
                <li><b>Gaming Marketplace</b></li>
            </ul>
        </div>
        )
    }
}
export default withFirebase(Navigation);