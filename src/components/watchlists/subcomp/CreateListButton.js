import React, { Component } from 'react';
import '../../../css/App.css';
import Button from '@material-ui/core/Button';


export default class CreateListButton extends Component {

    render() {
        return (
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="small"
                    onClick={this.handleOpen}
                >
                    create new list
                </Button>
        );
    }
}