import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 300,
    height: 300,
    border: "10px solid #FFF",
    marginTop: "-200px",
    zIndex: 100,
    boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.43)"
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt={props.userName} src={props.userPic} className={classes.bigAvatar} />
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
  userPic: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,

};

export default withStyles(styles)(ImageAvatars);