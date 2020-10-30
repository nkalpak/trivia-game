import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Welcome } from '../welcome/welcome';
import { Game } from '../game/game';
import { ContainerStyled } from './app-styles';

export const App = () => (
  <ContainerStyled>
    <BrowserRouter>
      <Route
        exact
        path="/"
        component={Welcome}
      />

      <Route
        path="/play"
        component={Game}
      />

    </BrowserRouter>
  </ContainerStyled>
);
