import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { ContainerStyled } from './app-styles';
import { Routes } from './components/routes/routes';

export const queryCache = new QueryCache();

export const App = () => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    <ContainerStyled>
      <Routes />
    </ContainerStyled>

    <ReactQueryDevtools />
  </ReactQueryCacheProvider>
);
