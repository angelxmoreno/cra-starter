import React, { Component } from 'react';

const NavBar = () => (
  <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">Navbar</a>
    <div className="navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
);

const ItemRow = () => (
  <section>
    <div className="row">
      <div className="col-lg-7">
          <img src="data:image/webp;base64,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" alt="amazon item"/>
      </div>

      <div className="col-lg-5">
          <h3>Project One</h3>
          <h4>Subheading</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
          <a className="btn btn-primary" href="/">View Project <span className="glyphicon glyphicon-chevron-right"></span></a>
      </div>
      </div>
      <hr />
  </section>
);
class App extends Component {
  render() {
    const items = []

    for (let i=0;i<5;i++) {
      items.push(<ItemRow key={i} />)
    }

    return (
      <section>
        <NavBar></NavBar>
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <h1 className="page-header">1 Col Portfolio
                      <small>Showcase Your Work One Column at a Time</small>
                  </h1>
              </div>
          </div>
          {items}
          <footer>
              <div className="row">
                  <div className="col-lg-12">
                      <p>Copyright &copy; Company 2013</p>
                  </div>
              </div>
          </footer>
        </div>
      </section>
    );
  }
}

export default App;
