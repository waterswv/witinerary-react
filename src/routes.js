
import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Map from './Map';
import SearchVineyards from './SearchVineyards';
import history from './history';


export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/home" render={(props) => <App {...props} />} />
          <Route path="/search" render={(props) => <SearchVineyards {...props} />} />
          <Route path="/map" render={(props) => <Map {...props} />} />
        </div>
      </Router>
  );
}
