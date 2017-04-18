import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import AutocompleteLocation from './forms/AutocompleteLocation';

import FormattedFormField from './forms/FormattedFormField';

const MusicianProfile = ({ handleSubmit }) => (

  <div className="row">
    <div className="small-12 columns">
      <h1>Set Up Profile</h1>

      <form className="form-create-event" onSubmit={handleSubmit}>
        <FormattedFormField title="Name">
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
            required
            autoFocus
          />
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
            required
          />
        </FormattedFormField>

        <FormattedFormField title="Phone Number">
          <Field
            name="phoneNumber"
            component="input"
            type="number"
            placeholder="(xxx)-xxx-xxxx"
            required
          />
        </FormattedFormField>

        <FormattedFormField title="I'm over 21.">
          <Field
            name="over21"
            component="input"
            type="checkbox"
            required
          />
        </FormattedFormField>

        <FormattedFormField title="Address">
          <AutocompleteLocation name="address" />
        </FormattedFormField>

        <div className="row">
          <div className="small-6 columns">
            <div>
              <h3>About your music You share:</h3>
            </div>
          </div>
        </div>

        <FormattedFormField title="Instrument/Voice">
          <Field
            name="majorInstrument"
            component="input"
            type="text"
            placeholder="Instrument / Voice"
            required
          />
        </FormattedFormField>

        <FormattedFormField title="Secondary Instrument/Voice">
          <Field
            name="secondaryInstrument"
            component="input"
            type="text"
            placeholder="Secondary Instrument/Voice"
          />
        </FormattedFormField>

        <FormattedFormField title="Video or Audio link:">
          <Field
            name="videoAudioLink"
            component="input"
            type="url"
            placeholder="Link"
          />
        </FormattedFormField>

        <FormattedFormField title="Profile:">
          <Field
            name="link"
            component="textarea"
            type="text"
            required
          />
        </FormattedFormField>

        <FormattedFormField>
          <input
            className="button"
            type="submit"
            value="Save"
          />
        </FormattedFormField>

      </form>
    </div>
  </div>
);


MusicianProfile.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired
  })
};

export default reduxForm({
  form: 'musicianProfileForm'
})(MusicianProfile);
