import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Welcome } from '../welcome/welcome';
import { Game } from '../game/game';
import { ContainerStyled } from './app-styles';

export const queryCache = new QueryCache();

export const App = () => (
  <ReactQueryCacheProvider queryCache={queryCache}>
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

    <ReactQueryDevtools />
  </ReactQueryCacheProvider>
);
