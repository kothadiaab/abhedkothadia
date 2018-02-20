import React, {Component} from 'react';

import PrimaryHeader from '../components/PrimaryHeader';

class SkillsView extends Component {
  render() {
    return (
      <div className="container container--780">
        <PrimaryHeader
          children="Skill Set"
        />
        <div className="padding-top-single-space">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="skill-card">
                Javascript Libraries
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="skill-card">
                Frameworks
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="skill-card">
                Tools
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="skill-card">
                Languages
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="skill-card">
                Core
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="skill-card">
                Cloud Services
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsView;
