import { shallow, mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

Object.assign(global, {
  mount,
  React,
  shallow
});

beforeEach(() => {
  jasmineEnzyme();
});

// require all js files that end with Spec.js or Spec.jsx in the test folder
var testsContext = require.context(".", true, /Spec.jsx?$/);
testsContext.keys().forEach(testsContext);

// output to the browser's console when the tests run
console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);
