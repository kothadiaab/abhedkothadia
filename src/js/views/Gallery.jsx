import React, {Component} from 'react';

import PrimaryHeader from '../components/PrimaryHeader';

class GalleryView extends Component {
  render() {
    return (
      <div className="container container--960">
        <div className="gallery">
          <PrimaryHeader
            children="Gallery"
          />
          <div className="row">
            Coming soon...
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryView;
