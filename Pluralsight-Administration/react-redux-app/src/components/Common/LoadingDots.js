import React, { PropTypes } from 'react';

class LoadingDots extends React.Component {
  constructor(props) {
    super(props);
    this.state = { frame: 1 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        frame: this.state.frame + 1
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let dots = this.state.frame % (this.props.dots + 1);
    let text = '';
    while (dots > 0) {
      text += '.';
      dots--;
    }

    return <span {...this.props}>{text}&nbsp;</span>;
  }
}

LoadingDots.propTypes = {
  dots: PropTypes.number,
  interval: PropTypes.number
};

LoadingDots.defaultProps = {
  dots: 3,
  interval: 300
};

export default LoadingDots;
