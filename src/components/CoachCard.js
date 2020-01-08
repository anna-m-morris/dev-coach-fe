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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WhatshotIcon from '@material-ui/icons/Whatshot';
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
    backgroundColor: green[800],
  },
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
        avatar={
          <Avatar
            alt={props.coach.first_name}
            className={classes.avatar}
          >
            {props.coach.first_name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.coach.first_name}
        subheader={props.coach.location}
      />
      <CardMedia
        className={classes.media}
        image={props.coach.avatar_url}
        title={props.coach.first_name}
      />
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
        >
          {props.coach.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph style={{ fontWeight: 800 }}>
            About {props.coach.first_name}
          </Typography>
          <Typography paragraph style={{ fontWeight: 600 }}>
            Rating: {props.coach.rating}
          </Typography>
          <Typography paragraph>
            Skill Level: {props.coach.skill_level}
          </Typography>
          <Typography paragraph>
            Years Experience: {props.coach.experience_level}
          </Typography>
          <Typography paragraph>
            Hourly Rate: £ {props.coach.hourly_rate}
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
      </Collapse>
    </Card>
  );
}
