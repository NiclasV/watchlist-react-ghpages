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

function OutlinedButton(props) {
  const { classes } = props;
  return (
        <Button 
            variant="outlined" 
            color={props.buttonColor}
            className={classes.button}
            size={props.buttonSize}
        >
        {props.buttonText}
      </Button>
  );
}

OutlinedButton.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonSize: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,

};

export default withStyles(styles)(OutlinedButton);