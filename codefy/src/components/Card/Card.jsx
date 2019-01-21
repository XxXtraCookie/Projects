import React from 'react';
import './card.scss';

const htmlImg = require('../../_images/html_5.png');

class Card extends React.Component {
  render() {
    return (
      <div className="card-wrapper">
        <div className="image-wrapper">
          <img src={htmlImg} ALT="HTML" />
        </div>
        <span className="title">Hyper Text Markup Language</span>
      </div>
    );
  }
}

export default Card;
