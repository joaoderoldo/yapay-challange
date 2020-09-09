import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateUser from './pages/CreateUser';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/users/new" component={CreateUser} />
    </Switch>
  );
}

export default Routes;
