import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';
import Header from './components/Header';
import Footer from './components/Footer';
import '../css/app';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
