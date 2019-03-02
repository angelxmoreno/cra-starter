import React, { Component } from 'react';
import { Router } from 'buttermilk';
import HomePage from './layout/HomePage';
import Layout from './layout/Layout';
import AboutPage from './layout/AboutPage';
import NotFound from './layout/NotFoundPage';


const routes = [
  {
    path: '/',
    render: () =>  HomePage,
  },
  {
    path: '/about',
    render: () =>  AboutPage,
  },
  {
    path: '*',
    render: () => NotFound  
  }
];


class App extends Component {
  render() {
    return (
      <Router
        outerComponent={Layout}
        routes={routes}
      />
    );
  }
}

export default App;
