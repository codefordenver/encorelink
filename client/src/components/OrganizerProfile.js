import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

class OrganizerProfile extends React.Component {
  static propTypes = {
    //organizerProfile: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="small-12 columns">
          <h1>Create Profile</h1>
          <h5 className="subheader">Create profile here to become an organization in our system. It's 100% free to use. Our goal is to help you match to as many volunteer musicians as possible</h5>
          <br/>
          <h3>Please complete your profile before you scheduling your first time slot.</h3>
          <br/>
          <form className="form-create-event" onSubmit={this.handleFormSubmit}>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Organization name:
                  <input type="text" onChange={this.handleOrganizationNameChange} required />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Your name:
                  <input type="text" onChange={this.handleNameChange} required />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Job title:
                  <input type="text" onChange={this.handleJobTitleChange} required />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Address:
                  <input type="text" onChange={this.handleAddressLine1Change} required />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>City:
                  <input type="text" onChange={this.handleAddressCityChange} required />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-7 columns">
                <div className="row">
                  <div className="small-12 medium-12 columns">
                    <label>State:
                      <input type="text" onChange={this.handleAddressStateChange} required />
                    </label>
                  </div>
                </div>
              </div>
              <div className="small-12 medium-3 columns">
                <div className="row">
                  <div className="small-12 medium-12 columns">
                    <label>Zipcode:
                      <input type="text" onChange={this.handleAddressZipChange} required />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Email:
                  <input type="text" onChange={this.handleEmailChange} required />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-7 columns">
                <div className="row">
                  <div className="small-12 medium-12 columns">
                    <label>Phone:
                      <input type="text" onChange={this.handlePhoneChange} required />
                    </label>
                  </div>
                </div>
              </div>
              <div className="small-12 medium-2 columns">
                <div className="row">
                  <div className="small-12 medium-12 columns">
                    <label>Ext:
                      <input type="text" onChange={this.handlePhoneExtChange} required />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Best contact method:
                  <input type="text" onChange={this.handleBestContatMethodChange} required />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Special notes:
                  <textarea onChange={this.handleNotesChange}></textarea>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Does the facility have a piano or any other instruments:</label>
                  <input type="radio" name="hasInstruments" onChange={this.handleHasInstrumentsChange} value="piano" id="hasInstrumentsPiano"/><label for="hasInstrumentsPiano">Piano</label>
                  <input type="radio" name="hasInstruments" onChange={this.handleHasInstrumentsChange} value="no" id="hasInstrumentsNo"/><label for="hasInstrumentsNo">Not yet</label>
                  <input type="radio" name="hasInstruments" onChange={this.handleHasInstrumentsChange} value="other" id="hasInstrumentsOther"/><label for="hasInstrumentsOther">Other</label>
                
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Please read the disclaimer <a href="#">here</a>. By signing up, you agree to this agreement:
                  <input type="checkbox" onChange={this.handleAcceptDisclaimerChange} name="acceptDisclaimer" />I agree.
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <button type="submit" className="button">Sign up</button>
              </div>
            </div>
          </form>
          <div>
            <span>{this.props.errorMessage}</span>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(OrganizerProfile);
