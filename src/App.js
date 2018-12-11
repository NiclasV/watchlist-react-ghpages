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
        searchvalue: 'Title or IMDB-ID'  
      };
  }

  handleChange = searchvalue => event => {
    this.setState({
      [searchvalue]: event.target.value,
    });
  };

  componentClicked = () => console.log('clicked');

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
  }

  getMovies = (value) => {
    let baseUrl = "http://www.omdbapi.com/";
    let key = "apikey=acfee4fa";

    fetch(baseUrl + "?s=" + value + "&plot=full&" + key)
    .then((response) => response.json())
    .then((response) => {
      this.setState({
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

  render() {
    return (
      <div className="App">
        <Navigation
          responseFacebook={this.responseFacebook}
          componentClicked={this.componentClicked}
          user={this.state.user}
        />
        <Router>
          <div>
            <Route path="/" render={(props) => <StartPage {...props} 
              movieSearch={this.state.movies}
              handleChange={this.handleChange}
              searchvalue={this.state.searchvalue}
              getMovies={this.getMovies}
            />} exact  />
            <Route path="/ProfilePage" component={ProfilePage} />
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }

}

export default App;
