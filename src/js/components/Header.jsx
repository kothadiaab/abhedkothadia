import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header-title">
            <h1><Link to="/">Abhed Kothadia</Link></h1>
          </div>
          <div className="header-navigation">
            <ul>
              <li><Link to="/">Profile</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
