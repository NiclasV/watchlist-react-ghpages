import React, { Component } from 'react';
import Avatar from './Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlined from '@material-ui/icons/DeleteOutlineOutlined'

class MovieItem extends Component {

    trimtitle = (props) => {
        let title = this.props.movie.movietitle;
        if (title.length > 30) {
            title = title.substring(0, 30) + "...";
        }

        return title;
    }

    handleDelete = (id, imdbid) => {

        let data = {
            watchlistid: id,
            imdbid: imdbid
          }

        console.log(data)

        if (window.confirm('You sure you wanna remove this title from the list?')) {

            return fetch('http://localhost/php/deletemoviefromlist.php', {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(data)
            })
            .then((response) => {
                this.props.getWatchlists(this.props.userID);
            })
            .catch((error) => {
                console.error(error);
            })
        }      
    }

    render() {
        return (
                <div className="movieitem">
                    <div className="movieitem-avatar">
                        <Avatar 
                            poster={this.props.movie.poster}
                            alt={this.props.movie.movietitle}
                        />
                    </div>
                    <div className="movieitem-info">
                    <div>
                        <p>{this.trimtitle()}</p>
                        <span>{this.props.movie.genre}</span>
                    </div>
                        <IconButton
                                //aria-owns={anchorEl ? 'simple-menu' : undefined}
                                //aria-haspopup="true"
                                onClick={() => this.handleDelete(this.props.movie.id, this.props.movie.imdbid)}
                            >
                                <DeleteOutlineOutlined />
                            </IconButton>
                    </div>
                    <hr/>
                </div>
        )
    }
}

export default MovieItem;