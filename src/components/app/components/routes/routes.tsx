import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PlayPage, RootPage } from '../../../../routes';
import { Routing } from '../../../../global';

export const Routes = () => (
  <BrowserRouter>
    <Switch>

      <Route
        exact
        path={Routing.Welcome}
        component={RootPage}
      />

      <Route
        path={Routing.Play.Default}
        component={PlayPage}
      />

    </Switch>
  </BrowserRouter>
);
