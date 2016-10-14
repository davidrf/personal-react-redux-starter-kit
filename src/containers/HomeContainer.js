import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { propTypes as RouterPropTypes } from 'react-router';
import Home from 'components/Home';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  HomeContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isExact: PropTypes.bool.isRequired,
    location: RouterPropTypes.location.isRequired,
    params: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    pattern: PropTypes.string.isRequired,
  };
}

export default connect()(HomeContainer);
