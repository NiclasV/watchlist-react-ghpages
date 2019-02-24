import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  avatar: {
    width: 60,
    height: 60,
  },
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