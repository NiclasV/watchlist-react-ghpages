import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer'
import StartPage from './components/StartPage';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user: {
          isLoggedIn: 'false',
          userID: '',
          name: '',
          email: '',
          picture: ''
        },
        movies: {
          search: '',
          totalResults: '',
          searchResults: ''
        },
        movie: {
          search: false,
          response: {

          },
        },
        searchvalue: "Search for movie or series",
        watchlists: [
          {
            created: "2018-12-14 11:31:30",
            description: "A collection of movies to watch",
            id: "1",
            movies: "",
            title: "Movies to watch",
            userid: "1"
          }
        ],
        listname: "N/A",
        listdescription: "N/A", 
        selectedwatchlist: "N/A"
      };
  }

  handleChange = searchvalue => event => {
    this.setState({
      [searchvalue]: event.target.value,
    });
  };

  createList = () => {
      let data = {
        listname: this.state.listname,
        listdescription: this.state.listdescription,
        userID: this.state.user.userID,
        movies: {},
      }
      
      return fetch('http://localhost/php/create.php', {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
        })
        .then((response) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
      })
  }

  //componentClicked = () => console.log('clicked');

  responseFacebook = (response) => {
      this.setState({
        user: {
          isLoggedIn: true,
          userID: response.id,
          name: response.name,
          email: response.email,
          picture: response.picture.data.url,
        },
      })
      this.getWatchlists()
  }

  getMovies = (value) => {
    let baseUrl = "http://www.omdbapi.com/";
    let key = "apikey=acfee4fa";

    fetch(baseUrl + "?s=" + value + "&plot=short&" + key)
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        movie: {
          search: false
        },
        movies: {
          search: response.Response,
          totalResults: response.totalResults,
          searchResults: response.Search
        },
      });
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getTitle = (imdbid) => {
    console.log("getting title");
    let baseUrl = "http://www.omdbapi.com/";
    let key = "apikey=acfee4fa";
    
    fetch(baseUrl + "?i=" + imdbid + "&plot=full&" + key)
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        movie: {
          search: true,
          response: response
        },
      });
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getWatchlists() {
      /* Fetching all watchlists from database based on userID */
      fetch('http://localhost/php/getwatchlists.php?userID=' + this.state.user.userID)
      .then((response) => response.json())
      .then((response) => {
          this.setState({
            watchlists: response,
          })
          if(this.state.watchlists === null) {
              this.createList()
              this.getWatchlists()
          }
      })
      .catch((error) => {
          console.error(error);
      })
  }

  render() {
    return (
      <div className="App">
        <Navigation
          responseFacebook={this.responseFacebook}
          componentClicked={this.componentClicked}
          user={this.state.user}
        />
        <Router>
          <div className="appMain">
            <Route path="/" render={(props) => 
            <StartPage {...props} 
              movieSearch={this.state.movies}
              singleMovie={this.state.movie}
              handleChange={this.handleChange}
              searchvalue={this.state.searchvalue}
              getMovies={this.getMovies}
              getTitle={this.getTitle}
              userInfo={this.state.user}
              watchlists={this.state.watchlists}
              createList={this.createList}
            />} exact  />
            <Route path="/ProfilePage" render={(props) => 
            <ProfilePage {...props} 
              userInfo={this.state.user}
              isLoggedIn={this.state.user.isLoggedIn}
              watchlists={this.state.watchlists}
              createList={this.createList}
              handleChange={this.handleChange}
            />}/>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }

}

export default App;
