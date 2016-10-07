import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormattedFormField from './FormattedFormField';

const CreateEvent = ({ handleSubmit, errorMessage }) => (
  <div className="row">
    <div className="small-12 columns">
      <h1>Schedule Performance</h1>
      <h4 className="subheader">Fill form below to set up a performance time slot</h4>
      <form className="form-create-event" onSubmit={handleSubmit}>
        <FormattedFormField title="Name">
          <Field
            component="input"
            name="name"
            type="text"
            placeholder="name"
            required
            autoFocus
          />
        </FormattedFormField>
        <FormattedFormField title="Start Date/Time">
          <Field
            component="input"
            name="date"
            type="datetime-local"
            placeholder="date"
            required
          />
        </FormattedFormField>
        <FormattedFormField title="End Date/Time">
          <Field
            component="input"
            name="endDate"
            type="datetime-local"
            required
          />
        </FormattedFormField>
        <FormattedFormField title="Location">
          <Field
            component="input"
            name="location"
            type="text"
            placeholder="Location"
            required
          />
        </FormattedFormField>
        <FormattedFormField title="Notes">
          <Field
            component="textarea"
            name="notes"
            placeholder="Notes"
          />
        </FormattedFormField>
        <FormattedFormField>
          <input
            className="button"
            type="submit"
            value="Schedule"
          />
        </FormattedFormField>
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
