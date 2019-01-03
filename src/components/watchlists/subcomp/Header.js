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
    marginTop: "15px",
}

export default class Header extends Component {

    render() {
        return (
            <div style={header}>
                <Typography variant="h1" align="left">
                    Your Watchlists
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