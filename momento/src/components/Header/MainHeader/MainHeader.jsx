import React from 'react';
import PropTypes from 'prop-types';
import './mainHeader.scss';

class MainHeader extends React.Component {
  render() {
    return (
      <div className="main-header-wrapper effect">
        <span className="main-header-logo">{this.props.title}</span>
      </div>
    );
  }
}

MainHeader.propTypes = {
  title: PropTypes.string.isRequired
};

MainHeader.defaultProps = {
  title: 'Momento'
};

export default MainHeader;
