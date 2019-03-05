import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  avatar: {
    width: 50,
    height: 50,
  },
  bigAvatar: {
    margin: 10,
    width: 320,
    height: 320,
    border: "10px solid #FFF",
    marginTop: "-230px",
    zIndex: 100,
    boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.43)",
    alignSelf: "center",
    textAlign: "center"
  }

};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div>
      <Avatar alt={props.alt} src={props.poster}className={classes.avatar} />
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default withStyles(styles)(ImageAvatars);