import React from 'react';
import PropTypes from 'prop-types';
import './image.scss';

const Image = (props) => {
  const {
    imgUrl,
    imgAlt,
    title,
    author,
    description,
    tags
  } = props;

  const imageTags = tags && tags.map((tag, idx) => {
    return <a href={tag[idx]}>tag{idx + 1}, </a>
  });

  return (
    <div className="image-wrapper">
      <div className="image">
        <img src={imgUrl} alt={imgAlt}/>
      </div>

      <div className="image-desc">
        <p>
          <a href="#">{title}</a> by <a href="#">{author}</a>
        </p>
        <p>
          <span>Description</span> {description}
        </p>
        <p>
          <span>Tags:</span> {imageTags}
        </p>
      </div>
    </div>
  );
};

Image.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Image;
