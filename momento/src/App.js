import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';

import MainHeader from './components/Header/MainHeader';
import MainMenu from './components/MainMenu';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainHeader title="Restaurant Momento and the Pickles" />
          <MainMenu />
        </div>
      </Router>
    );
  }
}

export default App;
