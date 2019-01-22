import React from 'react';
import './card.scss';

class Card extends React.Component {
  render() {
    return (
      <div className="card-wrapper">
        <div className="card-container">
          <div className="image-wrapper">
            <img src={this.props.imgSrc} alt={this.props.imgAlt} />
          </div>
          <span className="title">{this.props.description}</span>
        </div>
      </div>
    );
  }
}

export default Card;
