import React from 'react';
import NavBar from './NavBar';

const Layout = ({children}) => (
    <section>
      <NavBar></NavBar>
      <div className="container">
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
  );

export default Layout;
