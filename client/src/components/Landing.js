import React from 'react';
import RegisterContainer from '../containers/RegisterContainer';

function Landing() {
  return (
    <div>
      <div className="row">
        <div className="small-12 medium-6 large-8 column align-middle blue-bkgd intro-box">
          <div className="reg-box">
            <h1>Match. Play. Contritube.</h1>
            <p>
              Encore Link is the best way to match volunteer musicians with organizations
              who are in need of musicians who donate their time.
            </p>
          </div>
        </div>
        <div className="small-12 medium-6 large-4 column align-middle blue-bkgd2 intro-box align-spaced">
          <div className="form-box">
            <RegisterContainer />
          </div>
        </div>
      </div>
      <div className="row how-it-works align-spaced">
        <div className="small-12 column">
          <h1 className="blue-txt">How It Works</h1>
        </div>
        <div className="row align-center">
          <div className="column small-4">
            <h1 className="circleNum">1</h1>
            <p>Activity Director Schedules Open Spots for Musicians</p>
          </div>
          <div className="column small-4">
            <h1 className="circleNum">2</h1>
            <p>Musicians Search and Schedule Volunteering Spots</p>
          </div>
          <div className="column small-4">
            <h1 className="circleNum">3</h1>
            <p>Musicians Play for Audience</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
