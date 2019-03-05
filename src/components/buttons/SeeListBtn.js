import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: 20,
    marginBottom: 20,
  },
});

function SeeListBtn(props) {
  const { classes } = props;
  return (
        <Button 
            variant="outlined" 
            color={props.buttonColor}
            className={classes.button}
            size={props.buttonSize}
            onClick={ () => props.fullWatchlist("single", props.watchlistid)}
        >
        {props.buttonText}
      </Button>
  );
}

SeeListBtn.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonSize: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  fullWatchlist: PropTypes.func,
  watchlistid: PropTypes.string
};

export default withStyles(styles)(SeeListBtn);