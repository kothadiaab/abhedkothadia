import React, {Component} from 'react';

import PrimaryHeader from '../components/PrimaryHeader';

class BlogsView extends Component {
  render() {
    return (
      <div className="container container--960">
        <PrimaryHeader
          children="Blogs"
        />
        <div className="blogs">
          <div className="row">
            Coming soon...
          </div>
        </div>
      </div>
    );
  }
}

export default BlogsView;
