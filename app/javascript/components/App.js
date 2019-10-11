import React from 'react';
import { Route } from 'react-router-dom';
import Editor from './Editor';

// Stateless function which will contain all relevant routes
const App = () => (
  // Show Page which passes an ID for the Event object
  <Route path="/events/:id?" component={Editor} />
);

export default App;
