import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router'
import App from 'components/App';

let Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  Root.propTypes = {
    store: PropTypes.object.isRequired
  };
}

export default Root;
