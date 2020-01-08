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
import { green } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RateReviewIcon from '@material-ui/icons/RateReview';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import WorkIcon from '@material-ui/icons/Work';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const StyledButton = withStyles({
  root: {
    color: 'white',
    border: 0,
    backgroundColor: green[800],
    boxShadow: '0 4px 4px rgba(0, 0, 0, .25)',
    borderRadius: 4,
    height: 70,
    width: 150,
    padding: 1,
    margin: 1,
    fontSize: 16,
    textDecoration: 0,
    '&:hover': {
      backgroundColor: green[300],
    },
  },

  label: {
    textTransform: 'capitalize',
  },
})(Button);

const useStyles = makeStyles(theme => ({
  card: {
    margin: 10,
    minWidth: 250,
    maxWidth: 345,
    maxHeight: 500,
  },
  media: {
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
  // avatar: {
  //   backgroundColor: green[800],
  // },
}));

export default function RecipeReviewCard(props) {
  console.log(props);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        style={{ height: 90, width: 90, marginTop: 10 }}
        avatar={
          <Avatar
            style={{ height: 90, width: 90, marginTop: 10 }}
            alt={props.coach.first_name}
            className={classes.avatar}
            src={props.coach.avatar_url}
          />
        }
        // action={
        //   <IconButton aria-label='settings'>
        //     <MoreVertIcon />
        //   </IconButton>
        // }
      />
      <CardHeader
        style={{ height: 30, width: 30, marginTop: 20 }}
        title={props.coach.first_name}
        subheader={props.coach.location}
      ></CardHeader>
      {/* <CardMedia
        // style={{ height: 50, borderRadius: 50, width: 50, }}
        className={classes.media}
        image={props.coach.avatar_url}
        title={props.coach.first_name}
      /> */}
      <CardContent>
        <Typography
          style={{ marginTop: 10, minHeight: 30 }}
          variant='body1'
          color='textPrimary'
          component='p'
        >
          {props.coach.description}
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <WhatshotIcon style={{ color: green[800] }} />
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
      <Collapse in={expanded} timeout='auto' unmountOnExit> */}
      <CardContent>
        <Typography variant='body2'>
          <IconButton
            aria-label='rate review of coach'
            style={{ margin: 0, padding: 0, paddingRight: 5 }}
          >
            <RateReviewIcon />
          </IconButton>
          Rating: {props.coach.rating}
        </Typography>
        <Typography variant='body2'>
          <IconButton
            aria-label='rate review of coach'
            style={{ margin: 0, padding: 0, paddingRight: 5 }}
          >
            <WorkOutlineIcon />
          </IconButton>
          Skill Level: {props.coach.skill_level}
        </Typography>
        <Typography variant='body2'>
          <IconButton
            aria-label='rate review of coach'
            style={{ margin: 0, padding: 0, paddingRight: 5 }}
          >
            <WorkIcon />
          </IconButton>
          Experience: {props.coach.experience_level}
        </Typography>
        <Typography variant='body2'>
          <IconButton
            aria-label='rate review of coach'
            style={{ margin: 0, padding: 0, paddingRight: 5 }}
          >
            <MonetizationOnIcon />
          </IconButton>
          Rate: £ {props.coach.hourly_rate} per hr
        </Typography>
        <CardContent style={{ align: 'right', minWidth: 250 }}>
          <StyledButton style={{ minWidth: 250 }}>
            <Link
              style={{
                textDecoration: 'none',
                color: 'white',
                align: 'center',
              }}
              to={props.coach.contact_url}
            >
              Book Now
            </Link>
          </StyledButton>
        </CardContent>
      </CardContent>
      {/* </Collapse> */}
    </Card>
  );
}
