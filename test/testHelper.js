import { shallow, mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import { browserHistory } from 'react-router';
import { push, syncHistoryWithStore } from 'react-router-redux';

Object.assign(global, {
  browserHistory,
  mount,
  push,
  React,
  shallow,
  syncHistoryWithStore
});

beforeEach(() => {
  jasmineEnzyme();
});

// require all js files that end with Spec.js or Spec.jsx in the test folder
var testsContext = require.context(".", true, /Spec.jsx?$/);
testsContext.keys().forEach(testsContext);

// output to the browser's console when the tests run
console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);
