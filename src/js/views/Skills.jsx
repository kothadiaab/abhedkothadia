import React, {Component} from 'react';

import PrimaryHeader from '../components/PrimaryHeader';
import flip from '../../../images/icons/flip-icon.png';

class SkillsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      librariesCard: false,
      languagesCard: false,
      frameworksCard: false,
      BundlersCard: false,
      cloudServicesCard: false,
      otherToolsCard: false
    }

    this.handleLibrariesFlip = this.handleLibrariesFlip.bind(this);
    this.handleLanguagesFlip = this.handleLanguagesFlip.bind(this);
    this.handleFrameworksFlip = this.handleFrameworksFlip.bind(this);
    this.handleBundlersFlip = this.handleBundlersFlip.bind(this);
    this.handleCloudServicesFlip = this.handleCloudServicesFlip.bind(this);
    this.handleOtherToolsFlip = this.handleOtherToolsFlip.bind(this);
  }

  handleLibrariesFlip() {
    this.setState({
      librariesCard: !this.state.librariesCard
    });
  }

  handleLanguagesFlip() {
    this.setState({
      languagesCard: !this.state.languagesCard
    });
  }

  handleFrameworksFlip() {
    this.setState({
      frameworksCard: !this.state.frameworksCard
    });
  }

  handleBundlersFlip() {
    this.setState({
      BundlersCard: !this.state.BundlersCard
    });
  }

  handleCloudServicesFlip() {
    this.setState({
      cloudServicesCard: !this.state.cloudServicesCard
    });
  }

  handleOtherToolsFlip() {
    this.setState({
      otherToolsCard: !this.state.otherToolsCard
    });
  }

  render() {
    return (
      <div className="container container--960">
        <PrimaryHeader
          children="Skill Set"
        />
        <div className="skills">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className= { this.state.librariesCard ? "card flipped" : "card" } onClick={this.handleLibrariesFlip}>
                <div className="front">
                  Javascript Libraries
                  <img src={flip}/>
                </div>
                <div className="back">
                  <div className="row">
                    <div className="skills-column-1">
                      <ol>
                        <li>React</li>
                        <li>Redux</li>
                        <li>D3</li>
                        <li>Knockout</li>
                      </ol>
                    </div>
                    <div className="skills-column-2">
                      <ol>
                        <li>jQuery</li>
                        <li>Jest</li>
                        <li>Moment</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className= { this.state.languagesCard ? "card flipped" : "card" } onClick={this.handleLanguagesFlip}>
                <div className="front">
                  Languages
                  <img src={flip}/>
                </div>
                <div className="back">
                  <div className="row">
                    <div className="skills-column-1">
                      <ol>
                        <li>HTML5</li>
                        <li>XML</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                      </ol>
                    </div>
                    <div className="skills-column-2">
                      <ol>
                        <li>Javascript</li>
                        <li>.net core</li>
                        <li>Java</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className= { this.state.frameworksCard ? "card flipped" : "card" } onClick={this.handleFrameworksFlip}>
                <div className="front">
                  Frameworks
                  <img src={flip}/>
                </div>
                <div className="back">
                  <div className="row">
                    <div className="skills-column-1">
                      <ol>
                        <li>Node.js</li>
                        <li>Bootstrap</li>
                        <li>Bulma</li>
                      </ol>
                    </div>
                    <div className="skills-column-2">
                      <ol>
                        <li>Angular 1.0</li>
                        <li>Adobe AEM</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className= { this.state.BundlersCard ? "card flipped" : "card" } onClick={this.handleBundlersFlip}>
                <div className="front">
                  Bundlers & Source Control
                  <img src={flip}/>
                </div>
                <div className="back">
                  <div className="row">
                    <div className="skills-column-1">
                      <ol>
                        <li>Gulp</li>
                        <li>Rollup</li>
                        <li>Webpack</li>
                      </ol>
                    </div>
                    <div className="skills-column-2">
                      <ol>
                        <li>Github</li>
                        <li>SVN</li>
                        <li>Gitlabs</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className= { this.state.cloudServicesCard ? "card flipped" : "card" } onClick={this.handleCloudServicesFlip}>
                <div className="front">
                  Cloud Services
                  <img src={flip}/>
                </div>
                <div className="back">
                  <div className="row">
                    <div className="skills-column-1">
                      <ol>
                        <li>Adobe DTM</li>
                        <li>Salseforce</li>
                        <li>Azure</li>
                      </ol>
                    </div>
                    <div className="skills-column-2">
                      <ol>
                        <li>SKUID</li>
                        <li>PCF</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className= { this.state.otherToolsCard ? "card flipped" : "card" } onClick={this.handleOtherToolsFlip}>
                <div className="front">
                  Other Tools
                  <img src={flip}/>
                </div>
                <div className="back">
                  <div className="row">
                    <div className="skills-column-1">
                      <ol>
                        <li>Invision</li>
                        <li>JIRA</li>
                        <li>ALM</li>
                      </ol>
                    </div>
                    <div className="skills-column-2">
                      <ol>
                        <li>Zeplin</li>
                        <li>Rally</li>
                        <li>Clicktale</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsView;
