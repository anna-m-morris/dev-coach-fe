import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import styled from 'styled-components';
// import { sizing } from '@material-ui/system'

const useStyles = makeStyles({
  card: {
    maxWidth: '100px',
    // width: 150,
  },
  media: {
    height: 250,
  },
});

export default function AppointmentCard(props) {
  const classes = useStyles();
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

  const [openCancelModal, setOpenCancelModal] = useState(false);

  const Transition = React.forwardRef(function Transition(
    props,
    ref,
  ) {
    return <Slide direction='up' ref={ref} {...props} />;
  });

  const handleCancelModalOpen = () => {
    setOpenCancelModal(true);
  };

  const handleCancelModalClose = () => {
    setOpenCancelModal(false);
  };

  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            width={150}
            image={
              avatar_url
                ? avatar_url
                : 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
            title='Coach / Student'
          />
          <CardContent class-className='card-description'>
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
          <Button
            onClick={handleCancelModalOpen}
            size='small'
            color='primary'
          >
            cancel
          </Button>
          <Button
            size='small'
            color='primary'
            // onClick={handleCancelModalOpen}
          >
            message
          </Button>
        </CardActions>
      </Card>
      <Dialog
        open={openCancelModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCancelModalClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'> </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Are you sure you want to cancel appointment ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelModalClose} color='primary'>
            No
          </Button>
          <Button onClick={cancel} color='primary'>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

// const StyledAppointmentCard = styled.div`
//   .card {
//     width: 100%;
//     margin: 1rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background-color: #ffff;
//   }

//   .content {
//   }
//   .media {
//     height: 10rem;
//     border-radius: 50%;
//     background-size: 50%;
//   }
//   .card-description {
//     margin: 1.5rem 0 0;
//     color: #000;
//     font-family: ABeeZee;
//   }

//   .card-thumbnail {
//     height: 80px;
//     width: 80px;
//     border-radius: 10px;
//     font-family: ABeeZee;

//     img {
//       /* position: absolute; */
//       height: 100%;
//       width: 100%;
//       object-fit: cover;
//       border-radius: 50%;
//       font-family: ABeeZee;
//     }
//   }
// `;

// const StyledContainer = styled.div`
//   width: 100%;
//   max-width: 1024px;
//   margin: 0 auto;
//   display: grid;
//   grid-gap: 2em;
//   border: 2px solid red;
//   justify-content: space-between;
//   grid-template-columns: repeat(3, 1fr);

//   @media (max-width: 768px) {
//     max-width: 650px;
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 500px) {
//     max-width: 350px;
//     grid-template-columns: 1fr;
//   }

//   & > div.appointment-card {
//     background: #fff;
//     border-radius: 5px;
//     padding: 1rem;
//     box-shadow: 0px 0px 4px rgba(82, 68, 110, 0.3);
//   }

//   .flx-top-sb {
//     display: flex;
//     justify-content: space-between;
//     align-items: top;
//   }

//   .flx-center-sb {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .card-thumbnail {
//     height: 80px;
//     width: 80px;
//     border-radius: 5px;
//     position: relative;

//     img {
//       position: absolute;
//       height: 100%;
//       width: 100%;
//       object-fit: cover;
//     }
//   }

//   .card-description {
//     margin: 1.5rem 0 0;
//     color: #000;

//     h2,
//     h3 {
//       font-weight: bold;
//     }

//     h2 {
//       font-size: 1.5rem;
//       text-transform: uppercase;
//     }

//     h3 {
//       font-size: 1.4rem;
//     }

//     p {
//       font-weight: 600;
//       font-weight: 1.2rem;
//       margin-bottom: 0;
//     }
//   }

//   .upvote-btn {
//     border: 1px solid #101010;
//     border-radius: 5px;
//     padding: 0.25rem 1.15rem;
//     min-width: 60px;
//     height: 30px;
//     background: transparent;

//     span {
//       display: inline-block;
//     }
//   }
// `;
