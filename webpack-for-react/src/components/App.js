import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Header from '../components/Header';
import Explore from '../components/Explore';

// const AsyncDynamicPage = importedComponent(
//   () => import('./DynamicPage'), {LoadingComponent: Loading}
// );

// const AsyncNoMatch = importedComponent(
//   () => import('./NoMatch'), {LoadingComponent: Loading}
// );

const App = () => {
  return (
    <div className="main-container">
    <Header />

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Explore} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
