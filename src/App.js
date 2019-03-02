import React, { Component } from 'react';
import { Router } from 'buttermilk';
import HomePage from './layout/HomePage';
import Layout from './layout/Layout';
import AboutPage from './layout/AboutPage';


const routes = [
  {
    path: '/home',
    render: () =>  HomePage,
  },
  {
    path: '/about',
    render: () =>  AboutPage,
  }
];


class App extends Component {
  render() {
    return (
      <Router
        outerComponent={Layout}
        routes={routes}
        url='/home'
      />
    );
  }
}

export default App;
