import React, { Component } from 'react';
import '../../css/App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AddToListDialog extends Component {

    handleCreate = (listid, imdbid) => {
        this.props.saveMovieToList(listid, imdbid);
        this.props.handleClose();
    }

    render() {
        return(
            <Dialog
                open={this.props.isopen}
                onClose={this.props.handleClose}
                aria-labelledby="form-dialog-title"
                >
                <DialogTitle id="form-dialog-title">Add movie to Watchlist</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Select the watchlist in which you want the movie
                    </DialogContentText>
                    <TextField
                        id="watchlists-selector"
                        select
                        label="Watchlists"
                        className=""
                        onChange={this.props.handleChange('selectedwatchlist')}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                            },
                        }}
                        helperText="Please select your watchlist"
                        margin="normal"
                        variant="filled"
                        >
                        {this.props.watchlists.map(watchlist => (
                            <option key={watchlist.id} value={watchlist.id}>
                            {watchlist.title}
                            </option>
                        ))}
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={() => this.handleCreate(this.props.selectedWatchlist, this.props.imdbid)} color="primary" variant="contained">
                        + Add to list
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}