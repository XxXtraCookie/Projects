import React from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';
import DataApi from '../state-api/lib/index';
// import { data } from '../testData';

// const api = new DataApi(data);

class App extends React.Component {
  state = {
    articles: {},
    authors: {},
  };

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };

  async componentDidMount() {
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);

    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors(),
    }));
  }

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
