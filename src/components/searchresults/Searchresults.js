import React, { Component } from 'react';
import MovieCard from './subcomp/MovieCard';
import MovieCardFull from './subcomp/MovieCardFull';

class Searchresults extends Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    goSingleMovie = (imdbID) => {
        this.props.getTitle(imdbID)
    }

    handlePoster(image) {
        if(image === "N/A") {
            return "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg";
        } else {
            return image;
        }
    }

    contentBuild() {
        let content = '';
        
        if(this.props.movieSearch.search === "True" && this.props.singleMovie.search === false ) {
            content = this.props.movieSearch.searchResults.map((movie) =>
            <MovieCard 
                title={movie.Title}
                poster={movie.Poster}
                year={movie.Year}
                imdbID={movie.imdbID}
                goSingleMovie={this.goSingleMovie}
                key={movie.imdbID}
                handlePoster={this.handlePoster}
            />
        );

        } else if (this.props.singleMovie.search === true) {
            content = <MovieCardFull
                        movie={this.props.singleMovie.response}
                        watchlists={this.props.watchlists}
                        handleChange={this.props.handleChange}
                        isopen={this.state.open}
                        handleClickOpen={this.handleClickOpen}
                        handleClose={this.handleClose} 
                        saveMovieToDatabase={this.props.saveMovieToDatabase}
                        selectedWatchlist={this.props.selectedWatchlist}
                        handlePoster={this.handlePoster}
                        saveMovieToList={this.props.saveMovieToList}
            />;
        }
        return content;
    }

    render() {
        return (
            <div className="flexboxSearch">
                {this.contentBuild()}
            </div>
        );
    }
}

export default Searchresults;