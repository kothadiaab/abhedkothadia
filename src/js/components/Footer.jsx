import React, {Component} from 'react';
import { a } from 'react-router-dom';

import facebook from '../../../images/icons/footer_facebook.png';
import linkedin from '../../../images/icons/footer_linkedin.png';
import instagram from '../../../images/icons/footer_instagram.png';
import git from '../../../images/icons/footer_git.png';
import twitter from '../../../images/icons/footer_twitter.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul>
          <li><a href="https://www.facebook.com/abhedsk" target="_blank"><img src={facebook}/></a></li>
          <li><a href="https://www.linkedin.com/in/abhedkothadia" target="_blank"><img src={linkedin}/></a></li>
          <li><a href="https://www.instagram.com/abhedsk/" target="_blank"><img src={instagram}/></a></li>
          <li><a href="https://twitter.com/abhedsk" target="_blank"><img src={twitter}/></a></li>
          <li><a href="https://github.com/kothadiaab" target="_blank"><img src={git}/></a></li>
        </ul>
        <a href="mailto:abhed.kothadia@gmail.com">contact@abhedkothadia.com</a>
        <p className="footer-description">© 2018 Abhed Kothadia</p>
      </footer>
    );
  }
}

export default Footer;
