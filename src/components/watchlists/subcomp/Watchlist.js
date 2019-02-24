import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HrTitles from './HrTitles';
import VertMenu from '../../menu/Menu';
import MovieItem from './MovieItem';
import OutlinedButton from '../../buttons/buttonOutline';

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

        if (window.confirm('Are you sure you want to delete this list?')) {
            let data = {
                id: id,
            }

        return fetch('http://localhost/php/deletelist.php', {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(data)
            })
            .then((response) => {
              this.props.getWatchlists(this.props.userID)
            })
            .catch((error) => {
              console.error(error);
          })       
        }
             
        
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
                    <HrTitles
                        titles={this.props.movies.length}
                    />
                    <CardContent>
                    <div className="movies-container">
                        {this.props.movies.slice(0, 8).map((movie) =>
                            <MovieItem
                                movie={movie}
                                key={movie.imdbid}
                                getWatchlists={this.props.getWatchlists}
                                userID={this.props.userID}
                            />     
                        )}
                    </div> 
                    </CardContent>
                    <OutlinedButton
                        buttonText="See list"
                        buttonSize="large"
                        buttonColor="primary"
                    />
                </Card>
            </div>
        );
    }
}
