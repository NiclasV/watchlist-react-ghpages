import React, { Component } from 'react';
import Div from '../../styles/search';
import OutlinedTextFields from './subcomp/Textfield';

class Search extends Component {

  render() {
    return (
        <Div primary>
            <OutlinedTextFields 
              handleSearch={this.props.handleSearch}
              movieSearch={this.props.movieSearch}
              searchvalue={this.props.searchvalue}
              getMovies={this.props.getMovies}
              getTitle={this.props.getTitle}
            />
        </Div>
    );  
  }

}


export default Search;