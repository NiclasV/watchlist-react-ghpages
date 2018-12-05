import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
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
                },
            }}
            id="outlined-name"
            label="SEARCH FOR MOVIE OR SERIES"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
            autoFocus="true"
        />
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);