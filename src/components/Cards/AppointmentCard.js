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
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    borderRadius: '50%',
  },
});

export default function MediaCard(props) {
  const {
    first_name,
    last_name,
    avatar_url,
    appointment_datetime,
    appointment_topic,
    description,
    canceled,
    cancel,
  } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            avatar_url
              ? avatar_url
              : 'https://images.pexels.com/photos/1749900/pexels-photo-1749900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
          title='Coach / Student'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {`${first_name} ${last_name}`}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
          >
            {`${appointment_topic} ${appointment_datetime}`}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
          >
            {description}
          </Typography>

          {canceled ? (
            'Canceled'
          ) : (
            <button onClick={cancel}>Cancel</button>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Message
        </Button>
      </CardActions>
    </Card>
  );
}
