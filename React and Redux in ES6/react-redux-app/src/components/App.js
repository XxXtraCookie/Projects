import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './Common/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { loading: state.ajaxCallsInProgress > 0 };
}

export default connect(mapStateToProps)(App);
