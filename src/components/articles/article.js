import React, { Component } from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import { withFirebase } from '../firebase/firebase';

class Article extends Component {

    clique = () => {
        
        if(this.props.isLogged) {
            this.props.articlePanier(this.props.articles)
        } else {
            return alert("Vous devez être connecté.");
        }
    }

    render() {
        const nomInfo = this.props.nom ? ( <h3> { this.props.nom }</h3> ) : ( <p> Nom : inconnu </p> );
        const descriptionInfo = this.props.description ? ( <p>Description : { this.props.description }</p> ) : ( <p> Description : inconnue </p> );
        const prixInfo = this.props.prix ? ( <p>Prix : { this.props.prix }</p> ) : ( <p> Prix : inconnu </p> );

        return(
            <div>
                <div onClick={this.clique}  className='hoverArticle'> 
                <Grid container 
                justify="center"
                alignItems="center"
                spacing={1}>
                <Grid item xs={7} sm={7}>  
                    {nomInfo}
                    {descriptionInfo}
                    {prixInfo}
                </Grid>
                <Grid item xs={5} sm={5}>
                        <img src={this.props.src} className='image' alt="logo" />
            
                    
                </Grid>
                    
                </Grid>
                </div>
            </div>
        );
    }
}

export default withFirebase(Article);