import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import Autocomplete from 'react-google-autocomplete';

import FormattedFormField from './FormattedFormField';

const CreateEvent = ({ handleSubmit, errorMessage, handlePlaceSelction }) => (
  <div className="row">
    <div className="small-12 columns">
      <h1>Schedule Performance</h1>
      <h4 className="subheader">Fill form below to set up a performance time slot</h4>
      <form className="form-create-event" onSubmit={handleSubmit}>
        <FormattedFormField title="Name">
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="name"
            required
            autoFocus
          />
        </FormattedFormField>
        <FormattedFormField title="Start Date/Time">
          <Field
            name="date"
            component="input"
            type="datetime-local"
            placeholder="date"
            required
          />
        </FormattedFormField>
        <FormattedFormField title="End Date/Time">
          <Field
            name="endDate"
            component="input"
            type="datetime-local"
            required
          />
        </FormattedFormField>
        <FormattedFormField title="Location">
          <Field name="location" component={props =>
            <Autocomplete
              type="text"
              name="location"
              style={{ width: '100%' }}
              onPlaceSelected={param => props.input.onChange(param.formatted_address)}
              types={[]}/>
          }/>
        </FormattedFormField>
        <FormattedFormField title="Notes">
          <Field
            name="notes"
            component="textarea"
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
  handlePlaceSelection: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

export default reduxForm({
  form: 'createEventForm'
})(CreateEvent);
