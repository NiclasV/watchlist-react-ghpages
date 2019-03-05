import React, { Component } from 'react';
import '../../css/App.css';
import Header from './subcomp/Header';
import Watchlist from './subcomp/Watchlist';
import OutlinedButton from '../buttons/buttonOutline';

class Watchlists extends Component {
    state = {
        open: false,

    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    generateAllWatchlistsBtn = () => {
        if (this.props.watchlistType === "startpage" && this.props.isLoggedIn === true) {
                return (
                    <OutlinedButton
                        buttonText="See all lists"
                        buttonSize="large"
                        buttonColor="primary"
                        href="/Profilepage"
                    /> 
                );
        }
    }
    buildWatchlist() {
        var content = '';

        if(this.props.watchlists === null) {
            content = <Watchlist title="loading" description="loading" />;
             
            return content;
        } else if (this.props.watchlistType === "profilepage") {
            content = this.props.watchlists.slice(0).reverse().map((watchlist) => 
            <Watchlist
                key={watchlist.id + 1}
                watchlistid={watchlist.id}
                title={watchlist.title}
                description={watchlist.description}
                getWatchlists={this.props.getWatchlists}
                userID={this.props.userID}
                movies={watchlist.movies}
                switchWatchlistType={this.props.switchWatchlistType}
                fullWatchlist={this.props.fullWatchlist}
                watchlistType={this.props.watchlistType}
                isLoggedIn={this.props.isLoggedIn}
                
            />
            
        );

        return content;

        } else if (this.props.watchlistType === "single") {
            var watchlistid = this.props.activeWatchlist; 
            var index = this.props.watchlists.findIndex(function(element){return element.id === watchlistid});

            content =  <Watchlist
                            title={this.props.watchlists[index].title} 
                            description={this.props.watchlists[index].description} 
                            //getWatchlists={this.props.getWatchlists}
                            userID={this.props.userID}
                            watchlistid={this.props.watchlists[index].id}                
                            movies={this.props.watchlists[index].movies}
                            watchlistType={this.props.watchlistType}
                            isLoggedIn={this.props.isLoggedIn}
                        />;

            return content;
        
        } else {
            let i = this.props.watchlists.length - 1; 

            content = <Watchlist 
                            title={this.props.watchlists[i].title} 
                            description={this.props.watchlists[i].description} 
                            getWatchlists={this.props.getWatchlists}
                            userID={this.props.userID}
                            watchlistid={this.props.watchlists[i].id}                
                            movies={this.props.watchlists[i].movies}
                            watchlistType={this.props.watchlistType}
                            isLoggedIn={this.props.isLoggedIn}
                        />;

            return content;
        }
    }

    render() {
            return (
                <div class="content">
                    <Header
                        handleChange={this.props.handleChange}
                        createList={this.props.createList}
                        handleClickOpen={this.handleClickOpen}
                        isopen={this.state.open}
                        handleClose={this.handleClose}
                        getWatchlists={this.props.getWatchlists}
                        userID={this.props.userID}
                        watchlistType={this.props.watchlistType}
                    />
                    {this.buildWatchlist()}
                    {this.generateAllWatchlistsBtn()}
                </div>
            );
    }
}

export default Watchlists;
