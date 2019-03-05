import React, { Component } from 'react';
import '../../../css/App.css';
import Typography from '@material-ui/core/Typography';
import CreateListButton from './CreateListButton';
import CreateListDialog from '../../dialogs/CreateListDialog';

const header = {
    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "space-between",
    marginBottom: "35px",
    marginTop: "35px",
}

export default class Header extends Component {

    generateHeader = () => {
        if(this.props.watchlistType === "startpage") {
            return "Latest Watchlist"
        } else if (this.props.watchlistType === "profilepage") {
            return "Your Watchlists"
        } else {
            return "Watchlist"
        }
    }

    render() {
        return (
            <div style={header}>
                <Typography variant="h1" align="left">
                    {this.generateHeader()}
                </Typography>
                <CreateListButton 
                    handleClickOpen={this.props.handleClickOpen}
                />
                <CreateListDialog
                    getWatchlists={this.props.getWatchlists}
                    isopen={this.props.isopen}
                    handleClose={this.props.handleClose}
                    handleChange={this.props.handleChange}
                    createList={this.props.createList}
                    userID={this.props.userID}
                />
            </div>
        );
    }
}