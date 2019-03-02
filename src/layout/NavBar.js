import React from 'react';
import { Link } from 'buttermilk';

const RouteLink = ({route, text}) => (
  <li className="nav-item">
    <Link as="a" className="nav-link" href={route}>
      {text}
    </Link>
  </li>
);
export default () => (
  <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">Navbar</a>
    <div className="navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <RouteLink route='/' text='Home' />
        <RouteLink route='/about' text='About' />
        <RouteLink route='/404' text='FourOhFour' />
      </ul>
    </div>
  </nav>
);