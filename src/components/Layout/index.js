import React, { PropTypes } from 'react';
import Header from 'components/Header';
import DevTools from 'containers/DevTools';

// eslint-disable-next-line no-undef
let devToolComponent = __DEVELOPMENT__ && <DevTools />;

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    {devToolComponent}
  </div>
);

// eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  Layout.propTypes = {
    children: PropTypes.node.isRequired
  };
}

export default Layout;
