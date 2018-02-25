import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'

import ProfileView from './views/Profile';
import SkillsView from './views/Skills';
import WorkView from './views/Work';
import EducationView from './views/Education';
import BlogsView from './views/Blogs';
import GalleryView from './views/Gallery';
import ReactSetupView from './views/blogs-react_setup';

class Main extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={ProfileView}
          />
          <Route
            exact
            path="/skills"
            component={SkillsView}
          />
          <Route
            exact
            path="/work"
            component={WorkView}
          />
          <Route
            exact
            path="/education"
            component={EducationView}
          />
          <Route
            exact
            path="/blogs"
            component={BlogsView}
          />
          <Route
            exact
            path="/contact"
            component={GalleryView}
          />
          <Route
            exact
            path="/blogs-react_setup"
            component={ReactSetupView}
          />
        </Switch>
      </main>
    );
  }
}

export default Main;
