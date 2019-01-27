import React from 'react';
import './App.scss';

import MainHeader from './components/Header/MainHeader';
import MainBody from './components/MainBody/MainBody';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainHeader title="Restaurant Momento and the Pickles" />
        <MainBody />
      </div>
    );
  }
}

export default App;
