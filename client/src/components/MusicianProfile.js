import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { CURRENT } from '../constants/modelStatus';
import Autocomplete from 'react-google-autocomplete';
import { connect } from 'react-redux';

import FormattedFormField from './FormattedFormField';

const MusicianProfile = ({ data, handleSubmit, urlStatus }) => {
  if (!urlStatus || urlStatus !== CURRENT) {
    return <p> Loading ... </p>;
  } 

  return (
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
              value={data.firstName}
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
              value={data.over21}
            />
          </FormattedFormField>

          <FormattedFormField title="Address">
            <Field name="address" component={props => <Autocomplete type="text" name="address" onPlaceSelected={param => props.input.onChange(param.name + ', ' + param.formatted_address)} type={[]} />} />
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
              type="text"
              placeholder="Link"
            />
          </FormattedFormField>

          <FormattedFormField title="Profile:">
            <Field
              name="bio"
              component="textarea"
              type="text"
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
}

MusicianProfile.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    bio: PropTypes.string.isOptional,
    instruments: PropTypes.arrayOf(PropTypes.string),
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isOptional,
    over21: PropTypes.bool.isOptional,
    address: PropTypes.string.isOptional,
    videoAudioLink: PropTypes.string.isOptional
  }),
  urlStatus: PropTypes.string.isRequired
};

debugger
var form = reduxForm({
  form: 'musicianProfileForm'
})(MusicianProfile);

export default connect(
  state => ({
    initialValues: state.data
  })
)(form)