import React from 'react';

// Styling imports
import './App.css';
import { Grid } from '@material-ui/core';

// Logic imports
import { Route, BrowserRouter as Router } from 'react-router-dom';

// Custom pages imports
import Doorvoertijden from './Pages/Doorvoertijden';
import RegistreerLevering from './Pages/RegistreerLevering';
import Checks from './Pages/ChecksSpijkstra';
import Checks2 from './Pages/ChecksSpijkstra2';
import Gelukt from './Pages/Gelukt';

import setInitialData from './Pages/setInitialData';

function App() {
  return (
      <Grid container className="View" id="View">
        <Router>
          <Route path="/" exact component={ Doorvoertijden } />
          <Route path="/doorvoertijdenform" exact component={ RegistreerLevering } />
          <Route path="/checks" exact component={ Checks } />
          <Route path="/checks2" exact component={ Checks2 } />
          <Route path="/gelukt" exact component={ Gelukt } />
          <Route path="/index" exact component={ setInitialData } />
        </Router>
      </Grid>
  );
}

export default App;
