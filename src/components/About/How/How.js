import React from 'react';
import HowContainer from './HowStyles';

const How = () => {
  return (
    <HowContainer>
      <div className={'title'}>
        <h1>How does DevCoach work?</h1>
      </div>
      <section className={'how-cards-container'}>
        <article className={'how-card'}>
          <div>
            <h2>Coaches set their own prices</h2>
            <p>Cost per-session typically ranges from $30-$60.</p>
          </div>
          <div className={'card-image'}>
            <img
              className={'screenshot'}
              src='https://dev-coach-bucket.s3.amazonaws.com/Book+a+coach.PNG'
              alt='Market place screen shot'
            ></img>
          </div>
        </article>
        <article className={'how-card'}>
          <div className={'card-image'}>
            <img
              className={'screenshot'}
              src='https://dev-coach-bucket.s3.amazonaws.com/Booking+section.PNG'
              alt='booking UI screen shot'
            ></img>
          </div>
          <div>
            <h2>Schedule a Meeting</h2>
            <p>Request a meeting with a coach who interests you.</p>
          </div>
        </article>
        <article className={'how-card'}>
          <div>
            <h2>Chat With Your Coach</h2>
            <p>Chat via instant message or video call.</p>
          </div>
          <div className={'card-image'}>
            <img
              className={'screenshot'}
              src='https://dev-coach-bucket.s3.amazonaws.com/Chat-UI.png'
              alt='chat UI screen shot'
            ></img>
          </div>
        </article>
        <article className={'how-card'}>
          <div className={'card-image'}>
            <img
              className={'screenshot'}
              src='https://dev-coach-bucket.s3.amazonaws.com/Code.PNG'
              alt='chat UI screen shot'
            ></img>
          </div>
          <div>
            <h2>Code with your coach</h2>
            <p>Pair program with our built in IDE.</p>
          </div>
        </article>
        <article className={'how-card'}>
          <div>
            <h2>Find Coaches</h2>
            <p>
              Search for coaches based on the skills you want to
              improve.
            </p>
          </div>
          <div className={'card-image'}>
            <img
              className={'screenshot'}
              src='https://dev-coach-bucket.s3.amazonaws.com/Find+Coaches.PNG'
              alt='search UI screen shot'
            ></img>
          </div>
        </article>
      </section>
    </HowContainer>
  );
};

export default How;
