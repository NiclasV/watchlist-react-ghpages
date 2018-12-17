import React, { Component } from 'react';
import MovieCard from './subcomp/MovieCard';

class Searchresults extends Component {
    handlePoster(image) {
        if(image === "N/A") {
            return "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg";
        } else {
            return image;
        }
    }
    contentBuild() {
        let content = '';
        
        if(this.props.movieSearch.search === "True" ) {
            content = this.props.movieSearch.searchResults.map((movie) =>
            <MovieCard 
                title={movie.Title}
                poster={movie.Poster}
                year={movie.Year}
                imdbID={movie.imdbID}
                getTitle={this.props.getTitle}
                key={movie.imdbID}
                handlePoster={this.handlePoster}
            />
        );
        } else {
            content = "";
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