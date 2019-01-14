import React from 'react';
import './App.scss';

// import MainHeader from './components/Header/MainHeader';
import DenseAppBar from './components/Header/MainHeader/MainHeader'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <MainHeader /> */}
        <DenseAppBar/>
      </div>
    );
  }
}

export default App;
