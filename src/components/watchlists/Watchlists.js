import React, { Component } from 'react';
import '../../css/App.css';
import Header from './subcomp/Header';
import Watchlist from './subcomp/Watchlist';
import OutlinedButton from '../buttons/buttonOutline';

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
            content = this.props.watchlists.map((watchlist) => 
            <Watchlist
                key={watchlist.id}
                title={watchlist.title}
                description={watchlist.description}
            />
            
        );
        return content;
        } else {
            let i = this.props.watchlists.length - 1; 

            content = <Watchlist title={this.props.watchlists[i].title} description={this.props.watchlists[i].description} />;


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
                        open={this.state.open}
                        handleClose={this.handleClose}
                    />
                    {this.buildWatchlist()}
                    <OutlinedButton
                        buttonText="See all lists"
                        buttonSize="large"
                        buttonColor="primary"
                    />
                </div>
            );
    }
}

export default Watchlists;
