import React from 'react';
import './mainBody.scss';

import Card from '../Card';

const htmlImg = require('../../_images/html_5_v2.png');
const cssImg = require('../../_images/css_3.png');
const jsImg = require('../../_images/javascript.png');
const reactImg = require('../../_images/react.svg');
const reduxImg = require('../../_images/redux_v2.svg');

class MainBody extends React.Component {
  render() {
    return (
      <div className="main-body-wrapper">
        <Card
          imgSrc={htmlImg}
          imgAlt="HTML"
          description="Hyper Text Markup Language"
        />

        <Card
          imgSrc={cssImg}
          imgAlt="CSS"
          description="Cascading Style Sheets"
        />

        <Card
          imgSrc={jsImg}
          imgAlt="JavaScript"
          description="JavaScript"
        />

        <Card
          imgSrc={reactImg}
          imgAlt="React"
          description="React"
        />

        <Card
          imgSrc={reduxImg}
          imgAlt="Redux"
          description="Redux"
        />
      </div>
    );
  }
}

export default MainBody;
