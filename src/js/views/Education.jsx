import React, {Component} from 'react';

import PrimaryHeader from '../components/PrimaryHeader';

class EducationView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      education1Card: false,
      education2Card: false
    }

    this.handleEducation1Flip = this.handleEducation1Flip.bind(this);
    this.handleEducation2Flip = this.handleEducation2Flip.bind(this);
  }

  handleEducation1Flip() {
    this.setState({
      education1Card: !this.state.education1Card
    });
  }

  handleEducation2Flip() {
    this.setState({
      education2Card: !this.state.education2Card
    });
  }

  render() {
    return (
      <div className="container container--960">
        <PrimaryHeader
          children="Education"
        />
        <div className="education">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12 offset-md-2 offset-sm-3">
              <div className= { this.state.education1Card ? "card flipped" : "card" } onClick={this.handleEducation1Flip}>
                <div className="front">
                  <p className="education-school">Illinois Institute of Technology</p>
                  <p className="education-degree">Master of Science</p>
                  <p className="education-major">Computer Science</p>
                  <p className="education-duration">Jan 2012 - May 2014</p>
                </div>
                <div className="back">
                  <div className="row">
                    <div className="education-column-1">
                      <h6>Courses Taken:</h6>
                      <div>
                        <p>
                          Object oriented design and programming, Design and Analysis of Algorithms, Introduction to Algorithms,
                          Operating System Design and Implementation, Database Organization, Science of Programming,
                          Software Project Management, Data communications and Networking, Computer Networks, Wireless Networking,
                          Broadband networks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-rotate">...</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12 offset-md-2 offset-sm-3">
              <div className= { this.state.education2Card ? "card flipped" : "card" } onClick={this.handleEducation2Flip}>
                <div className="front">
                  <p className="education-school">University of Pune</p>
                  <p className="education-degree">Bachelor of Engineering</p>
                  <p className="education-major">Information Technolgy</p>
                  <p className="education-duration">June 2006 - July 2010</p>
                </div>
                <div className="back">
                  <div className="row">
                    <div className="education-column-1">
                      <h6>Courses Taken:</h6>
                      <div>
                        <p>
                          Data Structures and Files, Object Oriented Programming, Database Management Systems,
                          Relational databases, Operating Systems, Distributed Management Information System,
                          Software Engineering (SDLC), Software Testing and Quality Assurance, Information Retrieval,
                          Computer Networking
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-rotate">...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationView;
