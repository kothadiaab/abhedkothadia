import React, {Component} from 'react';

import PrimaryHeader from '../components/PrimaryHeader';

class WorkView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      work1Card: false,
      work2Card: false,
      work3Card: false,
      work4Card: false,
      work5Card: false
    }

    this.handleWork1Flip = this.handleWork1Flip.bind(this);
    this.handleWork2Flip = this.handleWork2Flip.bind(this);
    this.handleWork3Flip = this.handleWork3Flip.bind(this);
    this.handleWork4Flip = this.handleWork4Flip.bind(this);
    this.handleWork5Flip = this.handleWork5Flip.bind(this);
  }

  handleWork1Flip() {
    this.setState({
      work1Card: !this.state.work1Card
    });
  }

  handleWork2Flip() {
    this.setState({
      work2Card: !this.state.work2Card
    });
  }

  handleWork3Flip() {
    this.setState({
      work3Card: !this.state.work3Card
    });
  }

  handleWork4Flip() {
    this.setState({
      work4Card: !this.state.work4Card
    });
  }

  handleWork5Flip() {
    this.setState({
      work5Card: !this.state.work5Card
    });
  }

  render() {
    return (
      <div className="container container--960">
        <PrimaryHeader
          children="Work"
        />
        <div className="work">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12 offset-md-2 offset-sm-3">
              <div className= { this.state.work1Card ? "card flipped" : "card" } onClick={this.handleWork1Flip}>
                <div className="front">
                  <p className="work-company">Cognizant Technolgy Solutions</p>
                  <p className="work-role">Front End Web Developer</p>
                  <p className="work-duration">Jan 2016 - Present</p>
                </div>
                <div className="back">
                  <div className="row">
                    <div className="work-column-1">
                      <h6>Responsibilities:</h6>
                      <ol>
                        <li>Github</li>
                        <li>Invision</li>
                        <li>JIRA</li>
                        <li>ALM</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="card-rotate">...</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12 offset-md-2 offset-sm-3">
              <div className= { this.state.work2Card ? "card flipped" : "card" } onClick={this.handleWork2Flip}>
                <div className="front">
                  <p className="work-company">Xtron Corp.</p>
                  <p className="work-role">Computer Systems Analyst (Web)</p>
                  <p className="work-duration">Sept 2015 - Jan 2016</p>
                </div>
                <div className="back">
                  <div className="row">
                    <div className="work-column-1">
                      <h6>Responsibilities:</h6>
                      <ol>
                        <li>Github</li>
                        <li>Invision</li>
                        <li>JIRA</li>
                        <li>ALM</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="card-rotate">...</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12 offset-md-2 offset-sm-3">
              <div className= { this.state.work3Card ? "card flipped" : "card" } onClick={this.handleWork3Flip}>
                <div className="front">
                  <p className="work-company">ThinkCapital LLC.</p>
                  <p className="work-role">Front End Engineer</p>
                  <p className="work-duration">Jan 2015 - Aug 2015</p>
                </div>
                <div className="back">
                  <div className="row">
                    <div className="work-column-1">
                      <h6>Responsibilities:</h6>
                      <ol>
                        <li>Github</li>
                        <li>Invision</li>
                        <li>JIRA</li>
                        <li>ALM</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="card-rotate">...</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12 offset-md-2 offset-sm-3">
              <div className= { this.state.work4Card ? "card flipped" : "card" } onClick={this.handleWork4Flip}>
                <div className="front">
                  <p className="work-company">Egen Solutions</p>
                  <p className="work-role">System Analyst</p>
                  <p className="work-duration">Aug 2014 - Jan 2015</p>
                </div>
                <div className="back">
                  <div className="row">
                    <div className="work-column-1">
                      <h6>Responsibilities:</h6>
                      <ol>
                        <li>Github</li>
                        <li>Invision</li>
                        <li>JIRA</li>
                        <li>ALM</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="card-rotate">...</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12 offset-md-2 offset-sm-3">
              <div className= { this.state.work5Card ? "card flipped" : "card" } onClick={this.handleWork5Flip}>
                <div className="front">
                  <p className="work-company">Engagepoint Inc.</p>
                  <p className="work-role">Integration Engineer (Coop Intern)</p>
                  <p className="work-duration">Aug 2013 - Dec 2013</p>
                </div>
                <div className="back">
                  <div className="row">
                    <div className="work-column-1">
                      <h6>Responsibilities:</h6>
                      <ol>
                        <li>Github</li>
                        <li>Invision</li>
                        <li>JIRA</li>
                        <li>ALM</li>
                      </ol>
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

export default WorkView;
