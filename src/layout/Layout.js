import React from 'react';
import NavBar from './NavBar';
import { observer, inject } from "mobx-react"
import { AlertContainer } from '../components/Alerts';

const Layout = inject("alertStore")(observer(({ alertStore, children }) => (
  <section>
    <NavBar></NavBar>
    <div className="container">
      <AlertContainer />
      <main>{children}</main>
      <footer>
        <div className="row">
          <div className="col-lg-12">
            <p>Copyright &copy; Company 2018</p>
          </div>
        </div>
      </footer>
    </div>
  </section>
)));

export default Layout;
