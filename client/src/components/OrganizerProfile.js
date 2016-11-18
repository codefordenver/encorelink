import React from 'react';
import { withRouter } from 'react-router';

class OrganizerProfile extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="small-12 columns">
          <h1>Create Your Profile</h1>
          <h5 className="subheader">
            Your profile provides information we can share with musicians so they know about you and your organization.
          </h5>
          <br />
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
                      <input type="text" onChange={this.handlePhoneExtChange} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Best contact method (email is default):
                  <input type="text" onChange={this.handleBestContatMethodChange} />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Special notes:
                  <textarea onChange={this.handleNotesChange} />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Does the facility have a piano or any other instruments:</label>
                <input type="radio" name="hasInstruments" onChange={this.handleHasInstrumentsChange} value="piano" id="hasInstrumentsPiano" /><label htmlFor="hasInstrumentsPiano">Piano</label>
                <input type="radio" name="hasInstruments" onChange={this.handleHasInstrumentsChange} value="no" id="hasInstrumentsNo" /><label htmlFor="hasInstrumentsNo">Not yet</label>
                <input type="radio" name="hasInstruments" onChange={this.handleHasInstrumentsChange} value="other" id="hasInstrumentsOther" /><label htmlFor="hasInstrumentsOther">Other (please specify in special notes above)</label>

              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <button type="submit" className="button">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default withRouter(OrganizerProfile);
