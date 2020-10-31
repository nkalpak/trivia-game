import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PlayPage, RootPage } from '../../../../routes';

export const Routes = () => (
  <BrowserRouter>
    <Switch>

      <Route
        exact
        path="/"
        component={RootPage}
      />

      <Route
        path="/play"
        component={PlayPage}
      />

    </Switch>
  </BrowserRouter>
);
