import React from 'react';

import './App.css';

import { Header } from './Header/Header';
import MainContainer from './MainContainer';

class App extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;
