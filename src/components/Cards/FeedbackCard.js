// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import FeedbackModal from '../Modals/FeedbackModal';

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
// });

// const FeedbackCard = props => {
//   const classes = useStyles();
//   const {
//     rating,
//     feedback,
//     date,
//     coachFirstName,
//     coachLastName,
//     topic,
//   } = props;
//   return (
//     <Card className={classes.card}>
//       <CardActionArea>
//         {rating}
//         <CardContent>
//           <Typography gutterBottom variant='h5' component='h2'>
//             {topic}
//           </Typography>
//           <Typography
//             variant='body2'
//             color='textSecondary'
//             component='p'
//           >
//             {feedback}
//           </Typography>
//           <FeedbackModal
//             coachFirstName={coachFirstName}
//             coachLastName={coachLastName}
//             feedback={feedback}
//           />
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <div>{coachFirstName[0] + coachLastName[0]}</div>
//         <div>{date}</div>
//       </CardActions>
//     </Card>
//   );
// };

// export default FeedbackCard;
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 2px 4px 6px #d3d3d3;
  margin: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;

  .title {
    font-size: 1.2rem;
  }

  .feedback {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex: 1;
    margin: 3rem 0;
    padding: 0 2rem;

    .feedback-text-container {
      max-width: 60%;
      margin-left: 2rem;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem 0 1rem;
    width: 95%;
    border-top: 1px solid #d3d3d3;

    p {
      color: #a8a8a8;
    }
  }
`;

const FeedbackCard = ({
  rating,
  feedback,
  date,
  coachFirstName,
  coachLastName,
  topic,
}) => {
  return (
    <CardContainer>
      <div className='title-container'>
        <h4 className='title'>{topic}</h4>
      </div>
      <div className='feedback'>
        <div className='rating'>{rating}</div>
        <div className='feedback-text-container'>
          <p className='feedback-text'>{feedback}</p>
        </div>
      </div>

      <div className='footer'>
        <div className='coach-info'>
          <p>
            {coachFirstName} {coachLastName}
          </p>
        </div>
        <div className='date'>
          <p>{date}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default FeedbackCard;
