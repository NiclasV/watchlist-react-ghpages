import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center",
    padding: "10px"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "400px",
    marginTop: "120px",
    color: "#FFF"
  },
  dense: {
    marginTop: 16,
  },
  multilineColor:{
    color:'white',
    border: 'white',
    fontWeight: "400",
  },
  focusedField: {
    borderWidth: "1px",
    borderColor: "#2196f3 !important"
  },
  focusedLabel: {
    color: "#2196f3 !important"
  },
});



class OutlinedTextFields extends Component {
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
            InputProps={{
                classes: {
                input: classes.multilineColor,
                notchedOutline: classes.focusedField,
                focused: classes.focusedField
                },
            }}
            InputLabelProps={{
                classes: {
                root: classes.focusedLabel,
                notchedOutline: classes.focusedField
                },
            }}
            id="outlined-name"
            label="SEARCH FOR MOVIE OR SERIES"
            className={classes.textField}
            onChange={this.props.handleSearch('searchvalue')}
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                ev.preventDefault();
                this.props.getMovies(this.props.searchvalue)
              }
            }}
            margin="normal"
            variant="outlined"
        />
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);