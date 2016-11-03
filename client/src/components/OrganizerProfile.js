import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

class OrganizerProfile extends React.Component {
  static propTypes = {
    errorMessage: PropTypes.string
  };

  render() {
    return (
      <div className="row">
        <div className="small-12 columns">
          <h1>Create Your Profile</h1>
          <h5 className="subheader">
            Your profile provides information we can share with musicians so
            they know about you and your organization.
          </h5>
          <br />
          <form className="form-create-event" onSubmit={this.handleFormSubmit}>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Organization name:
                  <Field
                    name="orgName"
                    component="input"
                    type="text"
                    required
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Your name:
                  <Field
                    name="userName"
                    component="input"
                    type="text"
                    required
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Job title:
                  <Field
                    name="job title"
                    component="input"
                    type="text"
                    required
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Address:
                  <Field
                    name="address"
                    component="input"
                    type="text"
                    required
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>City:
                  <Field
                    name="city"
                    component="input"
                    type="text"
                    required
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-7 columns">
                <div className="row">
                  <div className="small-12 medium-12 columns">
                    <label>State:
                      <Field
                        name="state"
                        component="input"
                        type="text"
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="small-12 medium-3 columns">
                <div className="row">
                  <div className="small-12 medium-12 columns">
                    <label>Zipcode:
                      <Field
                        name="zip"
                        component="input"
                        type="text"
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Email:
                  <Field
                    name="email"
                    component="input"
                    type="text"
                    required
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-7 columns">
                <div className="row">
                  <div className="small-12 medium-12 columns">
                    <label>Phone:
                      <Field
                        name="phone"
                        component="input"
                        type="text"
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="small-12 medium-2 columns">
                <div className="row">
                  <div className="small-12 medium-12 columns">
                    <label>Ext:
                      <Field
                        name="ext"
                        component="input"
                        type="text"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Best contact method (email is default):
                  <Field
                    name="bestContact"
                    component="input"
                    type="text"
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Special notes:
                  <Field
                    name="notes"
                    component="textarea"
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <label>Does the facility have a piano or any other instruments:</label>
                <Field
                  name="hasInstruments"
                  component="input"
                  type="radio"
                  value="piano"
                  id="hasInstrumentsPiano"
                />
                <label htmlFor="hasInstrumentsPiano">
                  Piano
                </label>
                <Field
                  name="hasInstruments"
                  component="input"
                  type="radio"
                  value="no"
                  id="hasInstrumentsNo"
                />
                <label htmlFor="hasInstrumentsNo">
                  Not yet
                </label>
                <Field
                  name="hasInstruments"
                  component="input"
                  type="radio"
                  value="other"
                  id="hasInstrumentsOther"
                />
                <label htmlFor="hasInstrumentsOther">
                  Other (please specify in special notes above)
                </label>

              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 columns">
                <button type="submit" className="button">Submit</button>
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

export default reduxForm({
  form: 'organizerProfileForm'
})(OrganizerProfile);
