import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 600,
    margin: "0 auto",
    marginTop: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 42,
    fontWeight: "700",
    marginBottom: "5px",
    lineHeight: 1.2
  },
  pos: {
    marginBottom: 12,
  },
  info: {
    fontSize: 24,
    lineHeight: 1.2,
    fontWeight: "100"
  },
  bold: {
    fontWeight: 700,
  }
};

function ProfileCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card} raised={true}>
      <CardContent>
        <Typography className={classes.title} color="default" gutterBottom>
          {props.name}
        </Typography>
        <Typography component="p" className={classes.info} align="center"> 
          Total lists <span className={classes.bold}>{props.lists}</span><br/>
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
  lists: PropTypes.number.isRequired,
};

export default withStyles(styles)(ProfileCard);