import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App/App';
import ArticleContainer from './components/Article/ArticleContainer';
import ArticleListContainer from './components/ArticleList/ArticleListContainer';

const rootEl = document.getElementById('app');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ArticleListContainer} />
      <Route name="article" path="/:slug" component={ArticleContainer} />
    </Route>
  </Router>
), rootEl);

