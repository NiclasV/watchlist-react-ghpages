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
            content = <MovieCard/>
        } else {
            content = "";
        }
        return content;
    }
    

    render() {
        return (
            <div className={section}>
                {this.contentBuild()}
            </div>
        );
    }
}

export default Searchresults;