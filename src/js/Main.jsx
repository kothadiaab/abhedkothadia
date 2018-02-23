import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'

import ProfileView from './views/Profile';
import SkillsView from './views/Skills';
import WorkView from './views/Work';
import EducationView from './views/Education';
import BlogsView from './views/Blogs';
import GalleryView from './views/Gallery';

class Main extends Component {
  render() {
    return(
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
        </Switch>
    );
  }
}

export default Main;
