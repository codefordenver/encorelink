import PropTypes from 'prop-types';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import AutocompleteLocation from './forms/AutocompleteLocation';

const OrganizerProfile = ({ handleSubmit, createOrganization, updateOrganization, data }) => {
  const updatedOrganization = (formData) => updateOrganization(formData, data[0].id);

  return (
    <div className="row">
      <div className="small-12 columns">
        <h1>{(data && data.length) ? 'Update' : 'Create'} Your Profile</h1>
        <h5 className="subheader">
          Your profile provides information we can share with musicians so they know about you and your organization.
        </h5>
        <br />
        <form className="form-create-event" onSubmit={handleSubmit((data && data.length) ? updatedOrganization : createOrganization)}>
          <div className="row">
            <div className="small-12 medium-12 columns">
              <label>Organization name*:
                <Field
                  name="name"
                  component="input"
                  type="text"
                  required
                  autoFocus
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="small-12 medium-12 columns">
              <label>Contact name:
                <Field
                  name="contactName"
                  component="input"
                  type="text"
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="small-12 medium-12 columns">
              <label>Contact Job title:
                <Field
                  name="contactJob"
                  component="input"
                  type="text"
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="small-12 medium-12 columns">
              <label>Address*:
                <AutocompleteLocation
                  name="address"
                  required
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="small-12 medium-12 columns">
              <label>Email:
                <Field
                  name="email"
                  component="input"
                  type="email"
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
                      type="tel"
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
                      name="extension"
                      component="input"
                      type="number"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="small-12 medium-12 columns">
              <label>Preferred contact method (email is default):
              <Field
                name="contact"
                component="select"
                type="select"
              >
                <option selected value="email">Email</option>
                <option value="phone">Phone</option>
              </Field>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="small-12 medium-12 columns">
              <label>Special notes:
                <Field
                  name="notes"
                  component="textarea"
                  placeholder="Please describe the kind of events generally associated with your
                    facility e.g., room size, audience, or preferred music style"
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
              <label htmlFor="hasInstrumentsPiano">Piano</label>
              <Field
                name="hasInstruments"
                component="input"
                type="radio"
                value="no"
                id="hasInstrumentsNo"
              />
              <label htmlFor="hasInstrumentsNo">Not yet</label>
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
              <button type="submit" className="button">
                {(data && data.length) ? 'Update' : 'Submit' }
              </button>
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
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }))
};

export default reduxForm({
  form: 'createOrganizationForm'
})(OrganizerProfile);
