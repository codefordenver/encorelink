import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';


const MusicianProfile = ({ handleSubmit, errorMessage}) =>(

  <div className="row">
    <div className="small-12 columns">
      <h1>Create Your Profile</h1>

      <form className="form-create-event" onSubmit={handleSubmit}>
        <div className="small-7 small-offset-2 columns">
          <label>Phone Number
            <Field
              name="phone number"
              component="input"
              type="number"
              placeholder="(xxx)-xxx-xxxx"
              required
              autoFocus
            />
          </label>
        </div>

        <div className="small-5 small-offset-2 columns">
          <label>Date of Birth
            <Field
              name="date of birth"
              component="input"
              type="datetime"
              placeholder="date"
              required
            />
          </label>
        </div>

        <div className="small-9 small-offset-2 columns">
          <label>Address
            <Field
              name="address"
              component="input"
              type="text"
              placeholder="Location"
              required
            />
          </label>
        </div>

        <div className="small-5 small-offset-2 columns">
          <input
            className="button"
            type="upload file"
            value="Upload File"
          />
        </div>

        <div className="small-5 small-offset-2 columns">
          <label>Education
            <Field
              name="education"
              component="input"
              type="text"
              placeholder="Education"
              required
            />
          </label>
        </div>

        <div className="small-5 small-offset-2 columns">
          <label>University/Convervatory
            <Field
              name="university"
              component="input"
              type="text"
              placeholder="University/Convervatory"
              required
            />
          </label>
        </div>

        <div className="small-12 small-offset-2 columns">
          <div className="row">
            <div className="small-12 medium-7 columns">
              <label>Degree
                <Field
                  name="degree"
                  component="input"
                  type="text"
                  placeholder="Degree"
                  required
                />
              </label>
            </div>
            <div className="small-12 medium-5 columns">
              <label>Major
                <Field
                  name="major"
                  component="input"
                  type="text"
                  placeholder="Major"
                  required
                />
              </label>
            </div>
          </div>
        </div>

        <div className="small-8 small-offset-2 columns">
          <div className="radio">
            <label>Year:
              <label className="radio-label">
                <Field
                  name="year"
                  component="input"
                  type="radio"
                  value="Freshman"
                  required
                /> Freshman
              </label>
              <label className="radio-label">
                <Field
                  name="year"
                  component="input"
                  type="radio"
                  value="Sophomore"
                  required
                /> Sophomore
              </label>
              <label className="radio-label">
                <Field
                  name="year"
                  component="input"
                  type="radio"
                  value="Junior"
                  required
                /> Junior
              </label>
              <label className="radio-label">
                <Field
                  name="year"
                  component="input"
                  type="radio"
                  value="Senior"
                  required
                />Senior
              </label>
              <label className="radio-label">
                <Field
                  name="year"
                  component="input"
                  type="radio"
                  value="Master"
                  required
                />Master
              </label>
              <label className="radio-label">
                <Field
                  name="year"
                  component="input"
                  type="radio"
                  value="Doctoral"
                  required
                />Doctoral
              </label>
              <label className="radio-label">
                <Field
                  name="year"
                  component="input"
                  type="radio"
                  value="Alumni"
                  required
                />Alumni
              </label>
            </label>

            <div>
              <p>[+] (Add another education institution/degree)</p>
            </div>
          </div>
        </div>

        <div className="small-12 small-offset-2 columns">
          <div>
            <h3>About your music You share:</h3>
          </div>
        </div>

        <div className="small-5 small-offset-2 columns">
          <label>Major Instrument(s)
            <Field
              name="major instrument"
              component="input"
              type="text"
              placeholder="Major Instrument"
              required
            />
          </label>
          <label className="checkbox-label">
            <Field
              name="classical"
              component="input"
              type="checkbox"
              value="Classical"
              required
            />Classical
          </label>
          <label className="checkbox-label">
            <Field
              name="jazz"
              component="input"
              type="checkbox"
              value="Jazz"
              required
            />Jazz
          </label>
          <label className="checkbox-label">
            <Field
              name="country"
              component="input"
              type="checkbox"
              value="Country"
              required
            />Country
          </label>
          <label className="checkbox-label">
            <Field
              name="bluegrass"
              component="input"
              type="checkbox"
              value="Bluegrass"
              required
            />Bluegrass
          </label>
          <label className="checkbox-label">
            <Field
              name="30s"
              component="input"
              type="checkbox"
              value="30s"
              required
            />30s
          </label>
          <label className="checkbox-label">
            <Field
              name="40s"
              component="input"
              type="checkbox"
              value="40s"
              required
            />40s
          </label>
          <label className="checkbox-label">
            <Field
              name="50s"
              component="input"
              type="checkbox"
              value="50s"
              required
            />50s
          </label>
          <label className="checkbox-label">
            <Field
              name="60s"
              component="input"
              type="checkbox"
              value="60s"
              required
            />60s
          </label>
          <label className="checkbox-label">
            <Field
              name="world music"
              component="input"
              type="checkbox"
              value="World Music"
              required
            />World Music
          </label>
          <label className="checkbox-label">
            <Field
              name="others"
              component="input"
              type="checkbox"
              value="Others"
              required
            />Others
          </label>
        </div>

        <div className="small-12 columns">
          <label>Why do you want to voluteer:</label>
          <label className="checkbox-label">
            <Field
              name="share music"
              component="input"
              type="checkbox"
              value="Share Music"
              required
            />Share Music
          </label>
          <label className="checkbox-label">
            <Field
              name="gain performance experience"
              component="input"
              type="checkbox"
              value="Gain Performance Experience"
              required
            />Gain Performance Experience
          </label>
          <label className="checkbox-label">
            <Field
              name="teacher suggestion"
              component="input"
              type="checkbox"
              value="Teacher suggestion"
              required
            />Teacher suggestion
          </label>
          <label className="checkbox-label">
            <Field
              name="ensernbie requirements"
              component="input"
              type="checkbox"
              value="Ensernbie Requirements"
              required
            />Ensernbie Requirements
          </label>
          <label className="checkbox-label">
            <Field
              name="curious about the organization"
              component="input"
              type="checkbox"
              value="Curious about the organization"
              required
            />Curious about the organization
          </label>
          <label className="checkbox-label">
            <Field
              name="others"
              component="input"
              type="checkbox"
              value="Others"
              required
            />Others
          </label>
        </div>

        <div className="small-12 columns">
          <label>Video or Audio file link:
            <Field
              name="link"
              component="input"
              type="text"
              placeholder="Link"
              required
            />
            <input
              className="button"
              type="upload file"
              value="Upload"
            />
          </label>
        </div>

        <div className="small-10 columns">
          <label>Profile:
            <Field
              name="link"
              component="textarea"
              type="text"
              required
            />
            <input
              className="button"
              type="upload file"
              value="Save Change"
            />
          </label>
        </div>

      </form>
      <div>
        <span>{errorMessage}</span>
      </div>
    </div>
  </div>
);


MusicianProfile.propType = {
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

export default reduxForm({
  form: 'musicianProfileForm'
})(MusicianProfile);
