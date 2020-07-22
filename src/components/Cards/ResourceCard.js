import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 10,
    maxWidth: 300,
    minWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    minWidth: 300,
  },
});

export const ResourceCard = props => {
  console.log(`resource card props =>`, props);
  const { resource } = props;
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={resource.thumbnail}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {resource.title}
            </Typography>
            {resource.description}
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
            ></Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography>
            <a href={resource.link} rel='noopener' rel='noreferrer'>
              <Button size='small' color='primary'>
                Read article
              </Button>
            </a>
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default ResourceCard;
