import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CarsIndex from '../cars/Carsindex';

const Routes = () => {
  return(
    <Switch>
      <Route exact path="/" component={CarsIndex} />
    </Switch>
  );
};

export default Routes;
