import React, { Component } from 'react';
import Search from './search/Search';
import Watchlists from './watchlists/Watchlists';
import Recommended from './recommended/Recommended';
import Searchresults from './searchresults/Searchresults'
import '../css/App.css';

class StartPage extends Component {


  render() {
    return (
      <div className="mainContent">
        <Search 
          handleChange={this.props.handleChange}
          movieSearch={this.props.movieSearch}
          searchvalue={this.props.searchvalue}
          getMovies={this.props.getMovies}
        />
        <Searchresults movieSearch={this.props.movieSearch}/>
        <Watchlists/>
        <Recommended/>
      </div>
    );
  }

}

export default StartPage;
