import React from 'react';
import './App.scss';

import Input from './components/_common/Input';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="todos-wrapper">
          <Input />
        </div>
      </div>
    );
  }
}

export default App;
