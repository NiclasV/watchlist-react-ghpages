import React, { Component } from 'react';
import '../../css/App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class CreateListDialog extends Component {

    handleCreate = (userID) => {
        this.props.createList();
        this.props.handleClose();
        this.props.getWatchlists(userID)
        console.log(userID)
    }

    render() {
        return(
            <Dialog
                open={this.props.isopen}
                onClose={this.props.handleClose}
                aria-labelledby="form-dialog-title"
                >
                <DialogTitle id="form-dialog-title">Create new Watchlist</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add a name and description for your new list
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="normal"
                        id="name"
                        label="Name of the list"
                        type="name"
                        fullWidth
                        onChange={this.props.handleChange('listname')}
                    />
                    <TextField
                        margin="normal"
                        id="description"
                        label="Description"
                        type="description"
                        fullWidth
                        onChange={this.props.handleChange('listdescription')}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={ () => this.handleCreate(this.props.userID)} color="primary" variant="contained">
                        Create list
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}