import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledAppointmentCard = styled.div`
  .card {
    width: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content {
  }
  .media {
    height: 10rem;
    border-radius: 50%;
    background-size: 50%;
  }
`;

export default function AppointmentCard(props) {
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

  return (
    <StyledAppointmentCard>
      <Card className='card'>
        <CardActionArea className='content'>
          <CardMedia
            className='media'
            image={
              avatar_url
                ? avatar_url
                : 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
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
              {appointment_topic}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
            >
              {appointment_datetime}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {canceled ? (
            <p>Canceled</p>
          ) : (
            <Button onClick={cancel} size='small' color='primary'>
              Do you want to Cancel
            </Button>
          )}
          <Button size='small' color='primary'>
            Message
          </Button>
        </CardActions>
      </Card>
    </StyledAppointmentCard>
  );
}
