
import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Map from './Map';
import Home from './Home'
import SearchVineyards from './SearchVineyards';
import history from './history';


export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App {...props} />} />
          <Route path="/home" render={(props) => <Home {...props} />} />
          <Route path="/search" render={(props) => <SearchVineyards {...props} />} />
          <Route path="/map" render={(props) => <Map {...props} />} />
        </div>
      </Router>
  );
}
