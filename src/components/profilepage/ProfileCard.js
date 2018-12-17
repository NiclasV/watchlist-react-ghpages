import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 500,
    margin: "0 auto",
    marginTop: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 42,
    fontWeight: "700",
    marginBottom: "0px"
  },
  pos: {
    marginBottom: 12,
  },
  info: {
    fontSize: 24,
    lineHeight: 1.2,
    fontWeight: "100"
  }
};

function ProfileCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          {props.name}
        </Typography>
        <Typography component="p" className={classes.info} align="center"> 
          Total lists x <br/>
          Popular Director xx <br/>
          Popular Actor xx <br/>
          Popular Genres xx <br/>
        </Typography>
      </CardContent>
    </Card>
  );
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProfileCard);