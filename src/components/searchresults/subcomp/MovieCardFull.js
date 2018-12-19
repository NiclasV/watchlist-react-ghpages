import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import AddToListBtn from './AddToListBtn';
import AddToListDialog from '../../dialogs/AddToListDialog';

const styles = {
  card: {
    width: "100%",
    marginTop: 15,
    marginBottom: 15,
    margin: "0 auto",
    display: "flex",
    padding: 25,
    flexWrap: "no-wrap",
  },
  poster: {
      marginRight: 30,
      marginBottom: 20,
  },
  movie: {
      textAlign: "left",
  },
  genres: {
    color: "#000",
    marginBottom: 5,
    marginTop: 5,
    fontSize: "1.2em",
  },
  button: {
      marginTop: 10,
      marginBottom: 10
  },
  extramargin: {
    marginTOp: 10,
    marginBottom: 10,
  }
};

function MovieCard(props) {
  
  const { classes } = props;
  
  return (  
    <Card className={classes.card} raised="true">
        <div className={classes.poster}>
        <img src={props.movie.Poster} alt="movie poster"/>
        </div>
        <div className={classes.movie}>
            <Typography variant="h3" >
              {props.movie.Title} ({props.movie.Year})
            </Typography>
            <p className={classes.genres}>{props.movie.Genre}</p><br/>
            <p className="movieinfo">{props.movie.Plot}</p><br/>
            <span className="detailheading">Director </span><span className="movieinfo">{props.movie.Director}</span><br/>   
            <span className="detailheading">Actors </span><span className="movieinfo">{props.movie.Actors}</span><br/>
            <span className="detailheading">Writer </span><span className="movieinfo">{props.movie.Writer}</span><br/><br/>
            <AddToListBtn
              handleClickOpen={props.handleClickOpen}
            />
           <AddToListDialog
              open={props.open}
              handleClickOpen={props.handleClickOpen}
              handleClose={props.handleClose}
              handleChange={props.handleChange}
              watchlists={props.watchlists}
           />
        </div>
    </Card>
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  watchlists: PropTypes.object.isRequired,
  open: PropTypes.string.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired 
};

export default withStyles(styles)(MovieCard);