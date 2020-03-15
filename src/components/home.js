import React from 'react';
import { withFirebase} from './firebase/firebase.js'
import Article from './articles/article'
import ps from '../images/post-scriptum-cover.jpg';
import squad from '../images/squad-cover.jpg';
import farms from '../images/farming-simulator-19-cover.jpg';
import Grid from '@material-ui/core/Grid';
class Home extends React.Component {


    render() {
        return (
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <h1>{this.props.isLogged ? 'Bienvenue ' + this.props.email : 'Bonjour, veuillez vous connecter'}</h1>
                <Grid item xs={12}>    
                    <Article src={ps} nom='Post Scriptum' description='Post Scriptum is a WW2 simulation game, focusing on historical accuracy, large scale battles, a difficult learning curve and an intense need for cohesion, communication and teamwork.
' prix='28€'/>
                </Grid>
                <Grid item xs={12}>
                    <Article src={squad} nom='Squad' description={"Squad est un jeu de tir à la première personne qui vise à offrir une expérience de jeu réaliste en misant non seulement sur l’aspect jeu d’équipe mais aussi en mettant l'accent sur les mécanismes de cohésion, la tactique et la stratégie."} prix='38€'/>
                </Grid>
                <Grid item xs={12}>
                    <Article src={farms} nom='Farming Simulator 2019' description="Farming Simulator 19 pour PC marque le dixième anniversaire des jeux Farming Simulator, et la douzième édition sur toutes les plateformes de jeu." prix='19€'/>
                </Grid>
            </Grid>
        )
    }
}
export default withFirebase(Home);