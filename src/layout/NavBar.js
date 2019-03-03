import React from 'react';
import { Link } from 'buttermilk';
import { FacebookBtn } from '../components/Auth';

const RouteLink = ({ route, text }) => (
  <li className="nav-item">
    <Link as="a" className="nav-link" href={route}>
      {text}
    </Link>
  </li>
);
export default () => (
  <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">{process.env.REACT_APP_NAME}</a>
    <div className="navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <RouteLink route='/' text='Home' />
        <RouteLink route='/about' text='About' />
        <RouteLink route='/404' text='FourOhFour' />
      </ul>
      <FacebookBtn />
    </div>
  </nav>
);