import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { defaultProps } from 'react-select/src/Select';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            <img
              src={
                props.avatar_url
                  ? props.avatar_url
                  : 'https://clkde.tradedoubler.com/click?p=264311&a=3045532&g=24328740&epi=search_attention&url=https://stock.adobe.com/images/exclamation-point-of-attention-against-the-sky-triangular-sign-danger-warning/284208732?as_channel=affiliate&as_campaign=pexels&as_source=arvato'
              }
              alt='coach or student'
            />
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.appointment_topic}
        subheader={props.appointment_date}
      />
      <CardMedia
        className={classes.media}
        image='/static/images/cards/paella.jpg'
        title='Paella dish'
      />
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
        >
          Lorem Ipsum
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>Lorem Ipsum</Typography>
          <Typography paragraph>Lorem Ipsum</Typography>
          <Typography paragraph>Lorem Ipsum</Typography>
          <Typography>Lorem Ipsum</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
