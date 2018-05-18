import React from 'react';
// import {
//   Switch,
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Header from '../components/Header';
import MainSection from '../components/MainSection';

    //   <Router>
    //     <div>
    //       <Switch>
    //         <Route exact path="/" component={Explore} />
    //       </Switch>
    //     </div>
    //   </Router>

const App = () => {
  return (
    <div className="main-container">
      <Header/>
      <MainSection/>
    </div>
  );
};

export default App;
