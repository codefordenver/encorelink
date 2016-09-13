import React from 'react';
import RegisterContainer from '../containers/RegisterContainer';

function Landing() {
  return (
    <div className="landing-page">
      <div className="theater">
        <div className="row">
          <div className="small-12 medium-6 large-6 large-offset-1 column align-middle text-center">
            <h1>Match. Play. Contritube.</h1>
            <p>
              Encore Link is the best way to match volunteer musicians with organizations
              who are in need of musicians who donate their time.
            </p>
          </div>
          <div className="small-12 medium-6 large-4 large-offset-1 column align-middle">
            <RegisterContainer />
          </div>
        </div>
      </div>
      <div className="row content-block text-center">
        <div className="small-12 column">
          <h1 className="blue-txt">How It Works</h1>
        </div>
        <div className="column small-12 large-4">
          <h1>1</h1>
          <p className="text-left">Activity Director Schedules Open Spots for Musicians</p>
        </div>
        <div className="column small-12 large-4">
          <h1>2</h1>
          <p className="text-left">Musicians Search and Schedule Volunteering Spots</p>
        </div>
        <div className="column small-12 large-4">
          <h1>3</h1>
          <p className="text-left">Musicians Play for Audience</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
