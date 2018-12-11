import React, { Component } from 'react';

export default class Searchresults extends Component {
    
    
    contentBuild() {
        let content = '';

        if(this.props.movieSearch.search === "True" ) {
            return 'WHAT';
        } else {
            return '';
        }
    }
    

    render() {
        return (
            <div>
                {this.contentBuild()}
            </div>
        );
    }
}