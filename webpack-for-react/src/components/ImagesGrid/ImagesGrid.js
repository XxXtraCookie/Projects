import React from 'react';
import PropTypes from 'prop-types';
import './imagesGrid.scss';

class ImagesGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imgUrl, imgAlt, title, author, description } = this.props;

    return (
      <div className="images-container">
        <div className="image-wrapper">
          <div className="image">
            <img src={imgUrl} alt={imgAlt}/>
          </div>

          <div className="image-desc">
            <p>
              <a href={title}>Photo title</a> by <a href={author}>author</a>
            </p>
            <p>
              <span>Description</span> {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ImagesGrid.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ImagesGrid;
