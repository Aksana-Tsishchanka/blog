import React, { Component, PropTypes } from 'react';
import Article from './ArticlePreview';
import TagCloud from '../TagCloud/TagCloud';
import style from './ArticleList.css';

export default class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.element,
    ]),
    tags: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.element,
    ]),
  };
  static defaultProps = {
    articles: [],
    tags: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      filterTag: null,
    };
  }

  onFilterArticles = (selectedTag) => {
    this.setState({
      filterTag: selectedTag,
    });
  };

  createArticle = (articles) => {
    if (articles.length > 0) {
      return articles.map(article => (<Article
        {...article}
        key={article.id}
      />));
    }
    return 'There are no articles!';
  };

  filterArticle = articles => articles.filter(el => el.tags.indexOf(this.state.filterTag) > -1);

  createFilterArticle = articles => this.createArticle(this.filterArticle(articles));

  render() {
    const { articles, tags } = this.props;
    return (
      <div className={style.container}>
        <div className={style.tagContainer}>
          <TagCloud
            tags={tags}
            tagHandler={this.onFilterArticles}
          />
        </div>
        <div className={style.previewContainer}>
          { !this.state.filterTag ?
                this.createArticle(articles)
                :
                this.createFilterArticle(articles)
              }
        </div>
      </div>
    );
  }
}

