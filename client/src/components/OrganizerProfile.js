import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const OrganizerProfile = ({ handleSubmit, createOrganization, updateOrganization, data }) => {
  const updatedOrganization = (formData) => updateOrganization(formData, data[0].id);

  return (
    <div className="row">
      <div className="small-12 columns">
        <h1>Create Your Profile</h1>
        <h5 className="subheader">
          Your profile provides information we can share with musicians so they know about you and your organization.
        </h5>
        <br />
        <form className="form-create-event" onSubmit={handleSubmit(data.length ? updatedOrganization : createOrganization)}>
          <div className="row">
            <div className="small-12 medium-12 columns">
              <label>Organization name:
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Organization name"
                  required
                  autoFocus
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="small-12 medium-12 columns">
              <label>Your name:
                <input type="text" required />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="small-12 medium-12 columns">
              <label>Job title:
                <input type="text" required />
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
                  placeholder="Address"
                  required
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="small-12 medium-12 columns">
              <label>City:
                <input type="text" required />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="small-12 medium-7 columns">
              <div className="row">
                <div className="small-12 medium-12 columns">
                  <label>State:
                    <input type="text" required />
                  </label>
                </div>
              </div>
            </div>
            <div className="small-12 medium-3 columns">
              <div className="row">
                <div className="small-12 medium-12 columns">
                  <label>Zipcode:
                    <input type="text" required />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="small-12 medium-12 columns">
              <label>Email:
                <input type="text" required />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="small-12 medium-7 columns">
              <div className="row">
                <div className="small-12 medium-12 columns">
                  <label>Phone:
                    <input type="text" required />
                  </label>
                </div>
              </div>
            </div>
            <div className="small-12 medium-2 columns">
              <div className="row">
                <div className="small-12 medium-12 columns">
                  <label>Ext:
                    <input type="text" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="small-12 medium-12 columns">
              <label>Best contact method (email is default):
                <input type="text" />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="small-12 medium-12 columns">
              <label>Special notes:
                <textarea />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="small-12 medium-12 columns">
              <label>Does the facility have a piano or any other instruments:</label>
              <input type="radio" name="hasInstruments" value="piano" id="hasInstrumentsPiano" /><label htmlFor="hasInstrumentsPiano">Piano</label>
              <input type="radio" name="hasInstruments" value="no" id="hasInstrumentsNo" /><label htmlFor="hasInstrumentsNo">Not yet</label>
              <input type="radio" name="hasInstruments" value="other" id="hasInstrumentsOther" /><label htmlFor="hasInstrumentsOther">Other (please specify in special notes above)</label>

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
};

OrganizerProfile.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  createOrganization: PropTypes.func.isRequired,
  updateOrganization: PropTypes.func.isRequired,
  data: PropTypes.array
};

export default reduxForm({
  form: 'createOrganizationForm'
})(OrganizerProfile);
