import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import PrimaryHeader from '../components/PrimaryHeader';

class BlogsView extends Component {
  render() {
    return (
      <div className="container container--960">
        <div className="blogs">
          <PrimaryHeader
            children="Blogs"
          />
          <div className="row">
            <div className="col-md-10 col-sm-12 col-xs-12 offset-md-1">
              {/* <Link to="/blogs-react_setup" target="_blank"> */}
              <div className= "card">
                <div className="front">
                  <p className="blogs-title">Coming soon...</p>
                  {/* <p className="blogs-timestamp">Published on Oct 21, 2017</p>
                  <p className="blogs-description">
                    Coming soon...
                  </p> */}
                  <p className="blogs-action">Read more <span> &#8250;</span></p>
                </div>
              </div>
            {/* </Link> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-sm-12 col-xs-12 offset-md-1">
              {/* <Link to="/blogs-react_setup" target="_blank"> */}
              <div className= "card">
                <div className="front">
                  <p className="blogs-title">Coming soon...</p>
                  {/* <p className="blogs-timestamp">Published on Oct 21, 2017</p>
                  <p className="blogs-description">
                    Coming soon...
                  </p> */}
                  <p className="blogs-action">Read more <span> &#8250;</span></p>
                </div>
              </div>
            {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogsView;
