import React from 'react';
import { Route } from 'react-router-dom';
import Moment from 'moment-timezone';
import 'moment-timezone';
import Events from './Events';

// Stateless function which will contain all relevant routes
const App = () => (
  // Show Page which passes an ID for the Event object
  <Route path="/events/:id?" component={Events} />
);

export default App;
