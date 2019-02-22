import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HrTitles from './HrTitles';
import VertMenu from '../../menu/Menu';

export default class Watchlist extends Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    
    deleteList = (id) => {
        console.log('Deleting' + this.props.watchlistid)

        window.confirm('Are you sure you want to delete this list?');
            let data = {
                id: id,
            }

        return fetch('http://localhost/php/deletelist.php', {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(data)
            })
            .then((response) => {
              console.log(data); 
              this.handleClose();
              this.props.getWatchlists(this.props.userID)
            })
            .catch((error) => {
              console.error(error);
          })        
        
    }

    printMovies = () => {
        var movies = '';

        this.props.movies.map((movie) => 
           {console.log(movie)}
        );
    }

    render() {
        const { anchorEl } = this.state;

        return(
            <div className="watchlist">
                <Card raised={true}>
                    <CardHeader 
                        action={
                            <IconButton
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={this.props.title}
                        subheader={this.props.description}
                        titleTypographyProps={{align:"left"}}
                        subheaderTypographyProps={{align:"left"}}
                    /> 
                    <VertMenu
                        anchorEl={this.state}
                        handleClose={this.handleClose}
                        deleteList={this.deleteList}
                        watchlistid={this.props.watchlistid}
                    />
                    <HrTitles/>
                    <CardContent>
                        {this.props.movies.map((movie) => <h1>{movie.movietitle}</h1> )}
                
                    </CardContent>
                </Card>
            </div>
        );
    }
}
