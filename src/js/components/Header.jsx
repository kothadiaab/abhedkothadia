import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="fixed-top header">
        <nav>
          <div className="header-title">
            <h1><Link to="/">Abhed Kothadia</Link></h1>
          </div>
          <button
            className="header-button d-md-none d-lg-none d-xl-none"
            type="button"
            data-toggle="collapse"
            data-target=".header-navigation"
          >
            &#9776;
          </button>
          <div className="header-navigation collapse d-md-block d-lg-block d-xl-block">
            <ul>
              <li><Link to="/">Profile</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact">Gallery</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
