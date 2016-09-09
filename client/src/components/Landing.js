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
      <div className="row content-block text-center">
        <div className="small-12 column">
          <h1 className="blue-txt">Easy to Schedule</h1>
        </div>
        <div className="column small-12 large-4">
          <h1>icon</h1>
          <p className="text-left">
            Lorem ipsum dolor sit amet, cibo alienum quo at, putant delicata
            vituperatoribus sit ei. An agam offendit disputationi vel, menandri
            prodesset vituperatoribus eos in. Has et vitae omittantur. Eu mea
            zril dicant splendide, te iuvaret appetere vis.
          </p>
        </div>
        <div className="column small-12 large-4">
          <h1>icon</h1>
          <p className="text-left">
            Ne nostro bonorum intellegam mea, ullum iuvaret epicuri vim an.
            In nemore mediocrem neglegentur nec. Cu sea liber deseruisse, persius
            civibus ex cum. Eum facete placerat postulant eu. Modus option
            mnesarchum ut vis, vide gubergren voluptatum et per. Sed ea nullam
            facete integre, mea et oblique abhorreant definiebas.
          </p>
        </div>
        <div className="column small-12 large-4">
          <h1>icon</h1>
          <p className="text-left">
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
      <div className="easy-to-track content-block">
        <div className="row text-center">
          <div className="small-12 column">
            <h1 className="blue-txt">Easy to Track</h1>
            <div className="text-left">
              Lorem ipsum dolor sit amet, cibo alienum quo at, putant delicata
              vituperatoribus sit ei. An agam offendit disputationi vel, menandri
              prodesset vituperatoribus eos in. Has et vitae omittantur. Eu mea
              zril dicant splendide, te iuvaret appetere vis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
