import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class PrimaryHeader extends Component {
  render() {
    return (
      <div>
        <h2 className="primary-header sliding-middle-out-first">{this.props.children}</h2>
      </div>
    );
  }
}

export default PrimaryHeader;
