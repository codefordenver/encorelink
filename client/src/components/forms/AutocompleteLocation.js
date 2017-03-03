import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import Autocomplete from 'react-google-autocomplete';

function AutocompleteLocation({ name }) {
  return (
    <Field
      name={name}
      component={
        props =>
          <Autocomplete
            type="text"
            name="location"
            style={{ width: '100%' }}
            onPlaceSelected={
              param => props.input.onChange(`${param.name}, ${param.formatted_address}`)
            }
            types={[]}
          />
      }
    />
  );
}

AutocompleteLocation.propTypes = {
  name: PropTypes.string.isRequired
};

export default AutocompleteLocation;
