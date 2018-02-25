import React, {Component} from 'react';

import PrimaryHeader from '../components/PrimaryHeader';

class ReactSetupView extends Component {
  render() {
    return (
      <div className="container container--960">
        <PrimaryHeader
          children="React project setup"
        />
        <div className="blogs">
          <div className="row">
            Welcome to react_setup blog by Abhed Kothadia
          </div>
        </div>
      </div>
    );
  }
}

export default ReactSetupView;
