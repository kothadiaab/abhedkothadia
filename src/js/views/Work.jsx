import React, {Component} from 'react';

import PrimaryHeader from '../components/PrimaryHeader';

class WorkView extends Component {
  render() {
    return (
      <div className="container container--780">
        <PrimaryHeader
          children="Work"
        />
        <div>
          <p>
            My name is Abhed & I am an obsessive professional IT experience
            in analysis, design, development and implementation of enterprise
            applications in areas such as Digital Services, Insurance, Finance
            and Healthcare.
          </p>
          <p>
            Expertise in multiple frontend frameworks, libraries,
            tools and technologies. Actively involved in requirements gathering
            and analysis with business. Organized, detail oriented individual who
            prioritize work effectively. Ability to quickly adapt new skills,
            technologies and methodologies.
          </p>
        </div>
      </div>
    );
  }
}

export default WorkView;
