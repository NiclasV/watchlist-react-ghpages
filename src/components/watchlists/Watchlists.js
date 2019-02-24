import React, { Component } from 'react';
import '../../css/App.css';
import Header from './subcomp/Header';
import Watchlist from './subcomp/Watchlist';
//import OutlinedButton from '../buttons/buttonOutline';

const style = {
    padding: "25px"
}

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


    buildWatchlist() {
        var content = '';

        if(this.props.watchlists === null) {
            content = <Watchlist title="loading" description="loading" />;
             
            return content;
        } else if (this.props.page === "profilepage") {
            content = this.props.watchlists.slice(0).reverse().map((watchlist) => 
            <Watchlist
                key={watchlist.id}
                watchlistid={watchlist.id}
                title={watchlist.title}
                description={watchlist.description}
                getWatchlists={this.props.getWatchlists}
                userID={this.props.userID}
                movies={watchlist.movies}
            />
            
        );
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
                />;


            return content;
        }
    }

    render() {
            return (
                <div style={style}>
                    <Header
                        handleChange={this.props.handleChange}
                        createList={this.props.createList}
                        handleClickOpen={this.handleClickOpen}
                        isopen={this.state.open}
                        handleClose={this.handleClose}
                        getWatchlists={this.props.getWatchlists}
                        userID={this.props.userID}
                    />
                    {this.buildWatchlist()}
                    {/* <OutlinedButton
                        buttonText="See all lists"
                        buttonSize="large"
                        buttonColor="primary"
                    /> */}
                </div>
            );
    }
}

export default Watchlists;
