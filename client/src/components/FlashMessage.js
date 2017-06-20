import React from 'react';

const FlashMessage = ({ isLoggedIn, isAppInitialized, message, dismissMessage }) => (
  <div className="row">
    {isLoggedIn && isAppInitialized && message.shown && (
      <div className="small-12 columns">
        <div className="alert callout">
          {message.body}
          <button
            className="close-button"
            aria-label="Dismiss alert"
            type="button"
            onClick={dismissMessage}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    )}
  </div>
);

FlashMessage.propTypes = {
  isLoggedIn: React.PropTypes.bool,
  isAppInitialized: React.PropTypes.bool,
  message: React.PropTypes.string,
  dismissMessage: React.PropTypes.func
};

export default FlashMessage;
