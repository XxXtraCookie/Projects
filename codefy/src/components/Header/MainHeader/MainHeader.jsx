import React from 'react';
// import PropTypes from 'prop-types';
import './mainHeader.scss';

class MainHeader extends React.Component {
  render() {
    return (
      <div className="main-header-wrapper effect2">
        <span className="main-header-logo">Codefy</span>
      </div>
    );
  }
}

MainHeader.propTypes = {};

MainHeader.defaultProps = {};

export default MainHeader;
