import React from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };

  appState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  }

  state = this.appState();

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  UNSAFE_componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  onStoreChange = () => {
    this.setState(this.appState);
  }

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  render() {
    let { articles, searchTerm } = this.state;
    const searchRE = new RegExp(searchTerm, 'i');
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchRE) ||
          value.body.match(searchRE);
      });
    }

    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
