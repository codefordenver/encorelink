import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const CreateEvent = ({ handleSubmit, errorMessage }) => (
  <div className="row">
    <div className="small-12 columns">
      <h1>Schedule Performance</h1>
      <h4 className="subheader">Fill form below to set up a performance time slot</h4>
      <form className="form-create-event" onSubmit={handleSubmit}>
        <div className="row">
          <div className="small-3 medium-2 columns">
            <label>Name</label>
          </div>
          <div className="small-9 medium-10 columns">
            <Field
              component="input"
              name="name"
              type="text"
              placeholder="name"
              required
              autoFocus
            />
          </div>
        </div>
        <div className="row">
          <div className="small-3 medium-2 columns">
            <label>Start Date/Time</label>
          </div>
          <div className="small-9 medium-10 columns">
            <Field
              component="input"
              name="date"
              type="datetime-local"
              placeholder="date"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="small-3 medium-2 columns">
            <label>End Date/Time</label>
          </div>
          <div className="small-9 medium-10 columns">
            <Field
              component="input"
              name="endDate"
              type="datetime-local"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="small-3 medium-2 columns">
            <label>Location</label>
          </div>
          <div className="small-9 medium-10 columns">
            <Field
              component="input"
              name="location"
              type="text"
              placeholder="Location"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="small-3 medium-2 columns">
            <label>Notes</label>
          </div>
          <div className="small-9 medium-10 columns">
            <Field
              component="textarea"
              name="notes"
              placeholder="Notes"
            />
          </div>
        </div>
        <div className="row">
          <div className="small-3 medium-2 columns" />
          <div className="small-9 medium-10 columns">
            <input
              className="button"
              type="submit"
              value="Schedule"
            />
          </div>
        </div>
      </form>
      <div>
        <span>{errorMessage}</span>
      </div>
    </div>
  </div>
);

CreateEvent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

export default reduxForm({
  form: 'createEventForm'
})(CreateEvent);
