import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import Router from '../imports/ui/Router.js';
 
Meteor.startup(() => {
  render(<Router />, document.getElementById('render-target'));
});