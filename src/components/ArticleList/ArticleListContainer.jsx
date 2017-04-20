import React, { Component } from 'react';
import ArticleList from './ArticleList';
import sendRequest from '../../api/api';


class ArticleListContainer extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      tags: [],
    };
  }

  componentDidMount() {
    sendRequest('articles?_limit=100')
      .then(response => this.setState({
        articles: response,
        tags: this.getPossibleTags(response),
      }),
      );
  }

  getPossibleTags = (articles) => {
    const tagsList = [];
    articles.forEach((el) => {
      tagsList.push(...el.tags);
    });
    return [...new Set(tagsList)];
  };

  render() {
    const { articles, tags } = this.state;
    return (<ArticleList articles={articles} tags={tags} />);
  }
}

export default ArticleListContainer;
