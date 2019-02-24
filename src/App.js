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
            movies: [],
            title: "Movies to watch",
            userid: "1"
          }
        ],
        listname: "Movies to watch",
        listdescription: "A collection of movies to watch", 
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
        movies: [],
      }     
      return fetch('http://localhost/php/create.php', {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
        })
        .then((response) => {
          this.getWatchlists(this.state.user.userID)
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
      this.getWatchlists(this.state.user.userID)
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
      console.log(response)
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

  saveMovieToDatabase = (imdbid, title, year, rated, released, runtime, genre, director, writer, actors, plot, language, country, awards, poster, ratings, metascore, imdbrating, imdbvotes, type, dvd, boxoffice, production, website, trailer) => {

    let movie = {
      imdbid: imdbid,
      title: title,
      year: year,
      rated: rated,
      released: released,
      runtime: runtime,
      genre: genre,
      director: director,
      writer: writer,
      actors: actors,
      plot: plot,
      language: language,
      country: country,
      awards: awards,
      poster: poster,
      ratings: ratings,
      metascore: metascore,
      imdbrating: imdbrating,
      imdbvotes: imdbvotes,
      type: type,
      dvd: dvd,
      boxoffice: boxoffice,
      production: production,
      website: website,
      trailer: trailer,
    }

    return fetch('http://localhost/php/createmovie.php', {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(movie)
        })
        .then((response) => {
          console.log(movie);
        })
        .catch((error) => {
          console.error(error);
    })
  }

  saveMovieToList = (listid, imdbid) => {
    let damovie = {
      watchlistid: listid,
      imdbid: imdbid
    }
  
    return fetch('http://localhost/php/savetolist.php', {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(damovie)
      })
      .then((response) => {
        this.getWatchlists(this.state.user.userID);
      })
      .catch((error) => {
        console.error(error);
    })
  }

  getWatchlists = (userid) => {
      /* Fetching all watchlists from database based on userID */
      
      fetch('http://localhost/php/getwatchlists.php?userID=' + userid)
      .then((response) => response.json())
      .then((response) => {
          this.setState({
            watchlists: response,
          })
          setTimeout(()=>{
            if(this.state.watchlists === null) {
              this.createList()
            }  
          }, 500 )
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
              getWatchlists={this.getWatchlists}
              saveMovieToDatabase={this.saveMovieToDatabase}
              selectedWatchlist={this.state.selectedwatchlist}
              saveMovieToList={this.saveMovieToList}
            />} exact  />

            <Route path="/ProfilePage" render={(props) => 
            <ProfilePage {...props} 
              userInfo={this.state.user}
              isLoggedIn={this.state.user.isLoggedIn}
              watchlists={this.state.watchlists}
              createList={this.createList}
              handleChange={this.handleChange}
              getWatchlists={this.getWatchlists}
            />}/>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }

}

export default App;
