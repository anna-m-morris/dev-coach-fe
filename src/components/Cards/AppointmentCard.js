import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import styled from 'styled-components';
import calendarIcon from '../../img/calendar.svg';

const AppointmentCardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 100%;
  box-sizing: border-box;
  max-width: 100%;

  .cardContainer {
    width: 85%;
    height: 100%;
    background: white;
    border-radius: 8px;
    justify-content: center;
    border: 1px solid #dadce0;
    padding: 25px;
    box-shadow: 0 6px 10px rgba(50, 50, 93, 0.1);

    .topSection {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        font-style: normal;
        color: black;
        text-align: center;
        width: 40%;
      }

      .imgDiv {
        width: 90px;
        height: 90px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        margin: 0 auto;
        img {
          display: inline;
          margin: 0 auto;
          height: 100%;
          width: auto;
        }
      }
    }

    .textDiv {
      margin-top: 30px;

      .flexText {
        display: flex;
        align-items: center;
        margin-top: -30px;
        color: #4fad65;

        p {
          font-family: 'Ubuntu, sans-serif';
          font-style: normal;
          font-weight: 500;
          font-size: 1.03rem;
          color: #3c4043;
          margin-left: 12px;
        }
      }
    }
  }
`;

const ButtonDiv = styled.div`
  /* margin-left: -10px; */
  /* margin-top: -20px; */
  display: flex;
  justify-content: space-between;

  button {
    background: #3a7f4a;
    border: none;
    color: white;
    width: 38%;
    height: 2.1rem;
    border-radius: 0.4rem;
    cursor: pointer;
  }

  button:hover {
    background: #1e3f1f;
  } 
`;

// // const ButtonDividerDiv = styled.div`
// //   margin-left: 25%;
// `;
// const iconStyles = {
//   color: 'white',
//   fontSize: 13,
//   background: 'green',
//   width: '35%',
// };

export default function AppointmentCard(props) {
  // const classes = useStyles();
  const {
    first_name,
    last_name,
    avatar_url,
    appointment_datetime,
    appointment_topic,
    description,
    canceled,
    cancel,
    startInterview,
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

  const date = appointment_datetime;
  const dateSliced = date.slice(0, 15);

  const time = appointment_datetime;
  const timeSliced = time.slice(16);

  return (
    <>
      <AppointmentCardDiv>
        <div className='cardContainer'>
          <div className='topSection'>
            <h3>{`${first_name} ${last_name}`}</h3>
            {/* <h3>Nicklaus Michaelson</h3> */}
            <div className='imgDiv'>
              <img
                src={
                  avatar_url
                    ? avatar_url
                    : 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                }
              />
            </div>
          </div>
          <div className='textDiv'>
            <div className='flexText'>
              <i class='fas fa-shopping-bag'></i>
              <p>{appointment_topic}</p>
            </div>
            <div className='flexText'>
              <i class='far fa-calendar-check'></i>
              <p className='dateTime'>{dateSliced}</p>
            </div>
            <div className='flexText'>
              <i class='far fa-clock'></i>
              <p>{timeSliced}</p>
            </div>
            <p>{description}</p>
          </div>
          <ButtonDiv>
            <button
              onClick={handleCancelModalOpen}
              // style={iconStyles}
            >
              Cancel
            </button>
            {/* <ButtonDividerDiv> */}
            <button
            // style={iconStyles}
            // onClick={handleCancelModalOpen}
            >
              Message
            </button>
            {/* </ButtonDividerDiv> */}
          </ButtonDiv>
        </div>
      </AppointmentCardDiv>

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
