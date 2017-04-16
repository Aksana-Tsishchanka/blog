import React, { Component } from 'react';
import ArticleList from './ArticleList';
import sendRequest from '../../api/api';


class ArticleListContainer extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    sendRequest('articles?_limit=100')
      .then(response => this.setState({ articles: response }),
      );
  }

  render() {
    return (<ArticleList articles={this.state.articles} />);
  }
}

export default ArticleListContainer;
