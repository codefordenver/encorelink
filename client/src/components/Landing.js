import React from 'react';
import RegisterContainer from '../containers/RegisterContainer';

function Landing() {
  return (
    <div>
      <div className="row">
        <div className="small-12 large-8 column align-middle blue-bkgd intro-box">
          <div className="reg-box">
            <h1>Match. Play. Contritube.</h1>
            <p>
              Encore Link is the best way to match volunteer musicians with organizations
              who are in need of musicians who donate their time.
            </p>
          </div>
        </div>
          <div className="small-12 large-4 column align-middle blue-bkgd2 intro-box">
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
      <div className="row easy-to-sched align-spaced">
        <div className="small-12 column">
          <h1 className="blue-txt">Easy to Schedule</h1>
        </div>
        <div className="row">
          <div className="column small-4">
            <h1 className="circleNum">icon</h1>
            <p className="left">
              Lorem ipsum dolor sit amet, cibo alienum quo at, putant delicata
              vituperatoribus sit ei. An agam offendit disputationi vel, menandri
              prodesset vituperatoribus eos in. Has et vitae omittantur. Eu mea
              zril dicant splendide, te iuvaret appetere vis.
            </p>
          </div>
          <div className="column small-4">
            <h1 className="circleNum">icon</h1>
            <p className="left">
              Ne nostro bonorum intellegam mea, ullum iuvaret epicuri vim an.
              In nemore mediocrem neglegentur nec. Cu sea liber deseruisse, persius
              civibus ex cum. Eum facete placerat postulant eu. Modus option
              mnesarchum ut vis, vide gubergren voluptatum et per. Sed ea nullam
              facete integre, mea et oblique abhorreant definiebas.
            </p>
          </div>
          <div className="column small-4">
            <h1 className="circleNum">icon</h1>
            <p className="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
              consequat commodo urna, luctus lacinia orci varius non. Aenean risus
              ex, malesuada ullamcorper ipsum in, porta feugiat justo. Cras vel
              ligula sed lacus convallis pellentesque. Nulla cursus iaculis metus,
              non ultricies nibh elementum a. Sed et ante tristique, pellentesque
              leo eu, dignissim neque. Morbi ullamcorper velit felis, ut maximus
              velit aliquam eget.
            </p>
          </div>
        </div>
      </div>
      <div className="row easy-to-track">
        <h1 className="blue-txt">Easy to Track</h1>
        <div className="ett-container">
          Lorem ipsum dolor sit amet, cibo alienum quo at, putant delicata
          vituperatoribus sit ei. An agam offendit disputationi vel, menandri
          prodesset vituperatoribus eos in. Has et vitae omittantur. Eu mea
          zril dicant splendide, te iuvaret appetere vis.
        </div>
      </div>
      <div className="row get-started-today">
        <h1 className="blue-txt">Get Started Today</h1>
        <div className="gst-container" />
      </div>
    </div>
  );
}

export default Landing;
