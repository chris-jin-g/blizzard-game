import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './containers/pages/HomePage/index';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
