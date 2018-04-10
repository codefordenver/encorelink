import React from 'react';
import bandNursingHome from '../static-assets/img/band-nursinghome.jpg';
import cfdTeam from '../static-assets/img/cfd_team.jpg';

function AboutContainer() {
  return (
    <div className="row">
      <div className="small-10">
        <h1>About Us</h1>
        <hr />
        <div className="row about-img">
          <div className="medium-6 small-12 columns">
            <img
              src={bandNursingHome}
              alt="musicians playing"
            />
          </div>
          <div className="medium-6 small-12 columns">
            <img src={cfdTeam} alt="code for denver" />
          </div>
        </div>

        <p>
          <strong>Mission: </strong>EncoreLink is a web platform that
          simplifies the process to schedule events at healthcare
          facilities in order to increase the number of volunteer musical performances.
        </p>
        <p>
          <strong>Vision: </strong>The name “EncoreLink” is a reflection
          of our mission and vision that the musicians keep coming back and
          play more encores through the link between the musicians and the facilities.
        </p>
        <p>
          <strong>Major Partners: </strong>
          Encore Link is created and currently maintained
          by
          {' '}
          <a
            href="https://www.codefordenver.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code for Denver
          </a>
          ,
          a volunteer-driven community outreach that is committed to improving lives through
          technology. Many current students and graduates of the
          <a
            href="https://www.du.edu/lamont"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}Lamont School of Music{' '}
          </a>
          have volunteered through individual community outreach and now they are helping
          us launch EncoreLink in Denver, Colorado. Many thanks to the volunteers at Code
          for Denver for helping us build this incredible web platform!
        </p>
      </div>
    </div>
  );
}

export default AboutContainer;
