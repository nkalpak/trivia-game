import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Welcome } from '../../../welcome/welcome';
import { Game } from '../../../game/game';

export const Routes = () => (
  <BrowserRouter>
    <Switch>

      <Route
        exact
        path="/"
        component={Welcome}
      />

      <Route
        path="/play"
        component={Game}
      />

    </Switch>
  </BrowserRouter>
);
