import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';
import Autocomplete from 'react-google-autocomplete';

function emulateTabPress(currentEl) {
  const formEls = Array.from(currentEl.form.elements);
  const currentIdx = formEls.findIndex(el => el === currentEl);
  formEls[currentIdx + 1].focus();
}

function getFormattedGoogleAddress(googleParams) {
  return googleParams.formatted_address || googleParams.name;
}

function renderGoogleAutoComplete(props) {
  return (
    <Autocomplete
      type="text"
      name="location"
      onPlaceSelected={
        param => props.input.onChange(getFormattedGoogleAddress(param))
      }
      types={[]}
      value={props.input.value}
      onChange={newValue => props.input.onChange(newValue)}
      onKeyPress={event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          emulateTabPress(event.target);
        }
      }}
    />
  );
}
renderGoogleAutoComplete.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func
  })
};

function AutocompleteLocation({ name, required }) {
  return (
    <Field
      name={name}
      required={required}
      component={renderGoogleAutoComplete}
    />
  );
}

AutocompleteLocation.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool
};

export default AutocompleteLocation;
