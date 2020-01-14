import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';

const StyledCoachCard = styled.div`
  width: 15rem;
  height: 20rem;
  padding: 2.4rem;
  border: 1px solid #dadce0;
  border-radius: 0.8rem;
  margin-bottom: 1.2rem;
  flex-direction: column;
  text-align: left;

  .top {
    display: flex;
  }
`;

const CoachCard = props => {
  const { coach } = props;
  return (
    <StyledCoachCard>
      <div className='top'>
        <h3>{`${coach.first_name} ${coach.last_name}`}</h3>
        <p>${coach.hourly_rate} per hour</p>

        <Avatar alt='Coach' src={coach.avatar_url} />
      </div>

      <div></div>

      <div></div>
    </StyledCoachCard>
    // <Card className={classes.card}>
    //   <CardHeader
    //     className={classes.top}
    //     style={{
    //       height: 60,
    //       // backgroundImage: url('../img/card.jpg'),
    //     }}
    //   />
    //   <CardHeader
    //     style={{ margin: 10, padding: 0, marginTop: 5 }}
    //     avatar={
    //       <Avatar
    //         style={{
    //           height: 80,
    //           width: 80,
    //           margin: '5px 0px',
    //           padding: 0,
    //           border: '2px solid white',
    //           position: 'relative',
    //           top: '-50px',
    //         }}
    //         alt={props.coach.first_name}
    //         className={classes.avatar}
    //         src={props.coach.avatar_url}
    //       />
    //     }
    //   />
    //   <CardHeader
    //     style={{
    //       height: 20,
    //       width: 30,
    //       margin: 0,
    //       marginLeft: 10,
    //       padding: 0,
    //       paddingTop: 10,
    //       position: 'relative',
    //       top: '-50px',
    //     }}
    //     title={props.coach.first_name}
    //     subheader={props.coach.location}
    //   ></CardHeader>
    //   <CardContent
    //     style={{
    //       margin: 10,
    //       padding: 0,
    //       marginTop: 5,
    //       maxHeight: 20,
    //     }}
    //   >
    //     <Typography
    //       style={{
    //         marginTop: 5,
    //         paddingTop: 10,
    //         paddingBottom: 5,
    //         minHeight: 10,
    //         position: 'relative',
    //         top: '-30px',
    //       }}
    //       variant='body1'
    //       color='textPrimary'
    //       component='p'
    //     >
    //       {props.coach.description}
    //     </Typography>
    //   </CardContent>

    //   <CardContent
    //     style={{ margin: 10, padding: 0, marginTop: 5, fontSize: 10 }}
    //   >
    //     <Typography variant='body2'>
    //       <IconButton
    //         aria-label='rate review of coach'
    //         style={{ margin: 0, padding: 0, paddingRight: 5 }}
    //       >
    //         <RateReviewIcon style={{ fontSize: 'medium' }} />
    //       </IconButton>
    //       Rating: {props.coach.rating}
    //     </Typography>
    //     <Typography variant='body2'>
    //       <IconButton
    //         aria-label='rate review of coach'
    //         style={{ margin: 0, padding: 0, paddingRight: 5 }}
    //       >
    //         <WorkOutlineIcon style={{ fontSize: 'medium' }} />
    //       </IconButton>
    //       Skill Level: {props.coach.skill_level}
    //     </Typography>
    //     <Typography variant='body2'>
    //       <IconButton
    //         aria-label='rate review of coach'
    //         style={{ margin: 0, padding: 0, paddingRight: 5 }}
    //       >
    //         <WorkIcon style={{ fontSize: 'medium' }} />
    //       </IconButton>
    //       Experience: {props.coach.experience_level}
    //     </Typography>
    //     <Typography variant='body2'>
    //       <IconButton
    //         aria-label='rate review of coach'
    //         style={{ margin: 0, padding: 0, paddingRight: 5 }}
    //       >
    //         <MonetizationOnIcon style={{ fontSize: 'medium' }} />
    //       </IconButton>
    //       Rate: £ {props.coach.hourly_rate} per hr
    //     </Typography>
    //     <CardContent
    //       alignitems='center'
    //       style={{
    //         width: 250,
    //         margin: 0,
    //         padding: 0,
    //         paddingTop: 10,
    //       }}
    //     >
    //       <StyledButton
    //         alignitems='center'
    //         style={{
    //           position: 'relative',
    //           left: '20%',
    //           margin: 0,
    //           padding: 5,
    //         }}
    //       >
    //         <Link
    //           style={{
    //             textDecoration: 'none',
    //             color: 'white',
    //           }}
    //           to={props.coach.contact_url}
    //         >
    //           Book Now
    //         </Link>
    //       </StyledButton>
    //     </CardContent>
    //   </CardContent>
    //   {/* </Collapse> */}
    // </Card>
  );
};

export default CoachCard;
