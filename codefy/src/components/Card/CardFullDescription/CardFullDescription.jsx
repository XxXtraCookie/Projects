import React from 'react';
import './cardFullDescription.scss';

export const CardFullDescription = (props) => {
  return (
    <div className="description">
      {props.description}
    </div>
  );
};
