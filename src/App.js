import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import { ThemeProvider } from 'styled-components';
import { Loading } from './styles/styled';

const Starred = React.lazy(() => import('./pages/Starred'));
const Show = React.lazy(() => import('./pages/Show'));

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/starred">
            <Suspense fallback={<Loading>Loading...</Loading>}>
              <Starred />
            </Suspense>
          </Route>
          <Route path="/show/:showId">
            <Suspense fallback={<Loading>Loading...</Loading>}>
              <Show />
            </Suspense>
          </Route>
          <Route>This page is not found</Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
