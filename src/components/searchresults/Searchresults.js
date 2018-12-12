import React, { Component } from 'react';
import MovieCard from './subcomp/MovieCard';

const section = {
    padding: "15px",
    backgroundColor: "black"
}

class Searchresults extends Component {

    contentBuild() {
        let content = '';

        if(this.props.movieSearch.search === "True" ) {
            content = this.props.movieSearch.searchResults.map((movie) =>
            <MovieCard 
                Title={movie.Title}
                Poster={movie.Poster}
            />
        );
        } else {
            content = "";
        }
        return content;
    }
    
    testing() {
        if(this.props.movieSearch.search === "True" ) {
            console.log(this.props.movieSearch.searchResults[0].Title)
        } 
    }

    render() {
        return (
            <div className={section}>
                {this.contentBuild()}
                {this.testing()}
            </div>
        );
    }
}

export default Searchresults;