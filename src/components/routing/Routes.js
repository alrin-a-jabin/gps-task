import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';

import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = props => {
  return (


    <Switch>
      <section >
        <Alert />
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </section>
      <Route component={NotFound} />
    </Switch>


  );
};

export default Routes;
