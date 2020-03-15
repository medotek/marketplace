import React from 'react';
import { Link }  from 'react-router-dom';
import panier from '../images/panier.svg';
import Button from '@material-ui/core/Button';
import { AmILoggedWithAuthorization } from './firebase/firebase'
import * as ROUTES from '../constants/routes';
import {withFirebase} from './firebase/firebase'
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
        <div className="menu">
            <ul >
                <li><Button variant="outlined"><Link to={ROUTES.HOME}>Home</Link></Button></li>
                {this.props.authUser ? '' : <li><Link to={ROUTES.SIGN_IN}> <Button variant="outlined">Connexion</Button></Link></li>}
                {this.props.authUser ? <li> <Link to='/' onClick={this.auth().doSignOut()}><Button variant="outlined">Déconnexion</Button></Link></li> : '' }
                {this.props.authUser  ? '' : <li><Link to={ROUTES.SIGN_UP}><Button variant="outlined">Inscription</Button></Link></li>}
                <span className='panier'> <Link to={ROUTES.HOME}>  <img src={panier} className="caddie" alt="logo" /> {this.props.articles} </Link> </span> 
                {this.props.authUser  ? <Button color="primary"><li className="amilogged">Bonjour {this.props.email}, vous êtes <AmILoggedWithAuthorization/></li></Button> : <Button color="secondary"><li class="amilogged"><AmILoggedWithAuthorization/></li></Button>}
                <li><b>Gaming Marketplace</b></li>
            </ul>
        </div>
        )
    }
}
export default withFirebase(Navigation);