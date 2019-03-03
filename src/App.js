import React, { Component } from 'react';

import { Router } from 'buttermilk';
import HomePage from './layout/HomePage';
import Layout from './layout/Layout';
import AboutPage from './layout/AboutPage';
import NotFound from './layout/NotFoundPage';

import { Provider } from 'mobx-react';
import { alertStore } from './components/Alerts';
import { authStore } from './components/Auth';

const routes = [
  {
    path: '/',
    render: () => HomePage,
  },
  {
    path: '/about',
    render: () => AboutPage,
  },
  {
    path: '*',
    render: () => NotFound
  }
];

const stores = { alertStore, authStore }
class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router
          outerComponent={Layout}
          routes={routes}
        />
      </Provider>
    );
  }
}

export default App;
