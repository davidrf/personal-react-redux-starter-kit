import React from 'react';
import { Match } from 'react-router';
import Layout from 'components/Layout';
import HomeContainer from 'containers/HomeContainer';

const App = () => (
  <Layout>
    <Match exactly pattern="/" component={HomeContainer} />
  </Layout>
);

export default App;
