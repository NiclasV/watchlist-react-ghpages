import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import AddToListBtn from './AddToListBtn';
import AddToListDialog from '../../dialogs/AddToListDialog';

function MovieCard(props) {

  return (  
    <Card className="moviecard" raised={true}  >
        <div className="moviecard__poster">
        <img src={props.handlePoster(props.movie.Poster)} alt="movie poster"/>
        </div>
        <div className="moviecard__movie">
            <Typography variant="h3" >
              {props.movie.Title} ({props.movie.Year})
            </Typography>
            <p className="moviecard__movie_genres">{props.movie.Genre}</p><br/>
            <p className="movieinfo">{props.movie.Plot}</p><br/>
            <span className="detailheading">Director </span><span className="movieinfo">{props.movie.Director}</span><br/>   
            <span className="detailheading">Actors </span><span className="movieinfo">{props.movie.Actors}</span><br/>
            <span className="detailheading">Writer </span><span className="movieinfo">{props.movie.Writer}</span><br/><br/>
            <AddToListBtn
              handleClickOpen={props.handleClickOpen}
              saveMovieToDatabase={props.saveMovieToDatabase}
              movie={props.movie}
              variant="contained" 
              color="primary" 
              size="large"
            />
            <AddToListDialog
                isopen={props.isopen}
                handleClickOpen={props.handleClickOpen}
                handleClose={props.handleClose}
                handleChange={props.handleChange}
                watchlists={props.watchlists}
                imdbid={props.movie.imdbID}
                selectedWatchlist={props.selectedWatchlist}
                saveMovieToList={props.saveMovieToList}
            />
        </div>
    </Card>
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  watchlists: PropTypes.array.isRequired,
  isopen: PropTypes.bool.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  saveMovieToDatabase: PropTypes.func.isRequired,
  selectedWatchlist: PropTypes.string.isRequired,
  handlePoster: PropTypes.func.isRequired,
  saveMovieToList: PropTypes.func.isRequired
};

export default MovieCard;