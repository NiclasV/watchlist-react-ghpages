import React, { Component } from 'react';
import '../../../css/App.css';
import Button from '@material-ui/core/Button';

export default class AddToListButton extends Component {

    handleClick = (movie) => {
        this.props.handleClickOpen()
        this.props.saveMovieToDatabase(movie.imdbID, movie.Title, movie.Year, movie.Rated, movie.Released, movie.Runtime, movie.Genre, movie.Director, movie.Writer, movie.Actors, movie.Plot, movie.Language, movie.Country, 
        movie.Awards, movie.Poster, movie.Ratings, movie.Metascore, movie.imdbRating, movie.imdbVotes, movie.Type, movie.DVD, movie.BoxOffice, movie.Production, movie.Website, "N/A");
    }

    render() {

        return (
            <Button 
                variant={this.props.variant}
                color={this.props.color} 
                size={this.props.size}
                onClick={() => this.handleClick(this.props.movie)}
            >
                + Add to list
            </Button>
        );
    }
}
