import React from 'react';
import Navigation from '../Landing/Navigation/Navigation';
import { LocalAudioTrackPublication } from 'twilio-video';

const About = () => {
  return (
    <section>
      <Navigation />
      <h1>How does Dev Coach work?</h1>
      <article>
        <div>
          <h2>Find Coaches</h2>
          <p>Search for coaches based on the skills you want to improve.</p>
        </div>
        <div>
          <img src='#' alt='search UI screen shot'></img>
        </div>
      </article>
      <article>
        <div>
          <img src='#' alt='booking UI screen shot'></img>
        </div>
        <div>
          <h2>Schedule a Meeting</h2>
          <p>Request a meeting with a coach who interests you.</p>
        </div>
      </article>
      <article>
        <div>
          <h2>Chat With Your Coach</h2>
          <p>Chat via instant message or video call.</p>
        </div>
        <div>
          <img src='#' alt='chat UI screen shot'></img>
        </div>
      </article>
      <article>
        <div>
          <img src='#' alt='resources UI screen shot'></img>
        </div>
        <div>
          <h2>Get Resources</h2>
          <p>
            Access curated materials from your coach.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
