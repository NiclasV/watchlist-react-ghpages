import React, { Component } from 'react';
import Search from './search/Search';
import Watchlists from './watchlists/Watchlists';
import Recommended from './recommended/Recommended';
import Searchresults from './searchresults/Searchresults'
import '../css/App.css';

class StartPage extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  checkSearch() {
    if(this.props.movieSearch.search === "True") {
      return  <Searchresults 
                movieSearch={this.props.movieSearch}
                getTitle={this.props.getTitle}  
                singleMovie={this.props.singleMovie}
                watchlists={this.props.watchlists}
                handleChange={this.props.handleChange}
              />
    }
  }
  render() {
    return (
      <div className="mainContent">
        <Search 
          handleChange={this.props.handleChange}
          movieSearch={this.props.movieSearch}
          searchvalue={this.props.searchvalue}
          getMovies={this.props.getMovies}
          getTitle={this.props.getTitle}
          
        />
        {this.checkSearch()}
        <Watchlists
          userID={this.props.userInfo.userID}
          watchlists={this.props.watchlists}
          page="startpage"
          handleChange={this.props.handleChange}
          createList={this.props.createList}
        />
        <Recommended/>
      </div>
    );
  }

}

export default StartPage;
