import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 280,
    marginTop: 15,
    marginBottom: 15,
    margin: "0 auto"
  },
  media: {
    height: 240,
    width: 300
  },
};

function MovieCard(props) {
  
  const { classes } = props;
  
  return (
    <Card className={classes.card} raised="true"
      onClick={() => props.goSingleMovie(props.imdbID)}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.handlePoster(props.poster)}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title} ({props.year})
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to list
        </Button>
      </CardActions>
    </Card>
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  goSingleMovie: PropTypes.func.isRequired,
  handlePoster: PropTypes.func.isRequired

};

export default withStyles(styles)(MovieCard);