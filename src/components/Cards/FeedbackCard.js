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
});

export default function FeedbackCard(props) {
  const classes = useStyles();
  const {
    rating,
    feedback,
    date,
    coachFirstName,
    coachLastName,
  } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        {rating}
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {`${coachFirstName} ${coachLastName}`}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
          >
            {feedback}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div>{coachFirstName[0] + coachLastName[0]}</div>
        <div>{date}</div>
      </CardActions>
    </Card>
  );
}
