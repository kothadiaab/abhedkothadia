import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import '../css/app';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <AppRoutes/>
        <Footer/>
      </div>
    );
  }
}

export default App;
