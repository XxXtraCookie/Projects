import React from 'react';
import './mainBody.scss';

import Card from '../Card';

class MainBody extends React.Component {
  render() {
    return (
      <div className="main-body-wrapper">
        <Card />
      </div>
    );
  }
}

export default MainBody;
