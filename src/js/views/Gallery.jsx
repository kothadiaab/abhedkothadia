import React, {Component} from 'react';

import PrimaryHeader from '../components/PrimaryHeader';

class GalleryView extends Component {
  render() {
    return (
      <div className="container container--960">
        <PrimaryHeader
          children="Gallery"
        />
        <div className="gallery">
          <div className="row">
            Coming soon...
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryView;
