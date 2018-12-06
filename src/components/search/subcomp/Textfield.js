import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "400px",
    marginTop: "100px",
    color: "#FFF"
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 400,
  },
  multilineColor:{
    color:'white',
    border: 'white'
  },
  unfocusedField: {
    borderWidth: "1px",
    borderColor: "white !important"
  },
  unfocusedLabel: {
    color: "#FFF"
  },
  focusedField: {
    borderWidth: "1px",
    borderColor: "#2196f3 !important"
  },
  focusedLabel: {
    color: "#2196f3 !important"
  },
});

class OutlinedTextFields extends React.Component {
  state = {
    name: 'Title or IMDB-ID',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

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
            onChange={this.handleChange('name')}
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