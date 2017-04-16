import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import style from './ArticlePreview.css';

function previewContent(content) {
  let truncatedContent;
  if (content.length > 200){
    const limit = 200,
      endPosition = content.slice(limit).search(/\s/);
    truncatedContent = `${content.substring(0, limit + endPosition)} <div class="more">... more</div>`;
  } else{
    truncatedContent = content;
  }
  return {__html: truncatedContent };
}

export default class Article extends Component {

  openArticle = () => {
    browserHistory.push(`/${this.props.slug}`);
  };

  render() {
    const { title, author, pubDate, content } = this.props;
    return (
      <div className={style.container}>
        <h2 className={style.title}>
          <a href="" onClick={this.openArticle}>{ title }</a>
        </h2>
        <div className={style.info}>
          <div className={style.author}>{ author }</div>
          <div className={style.date}>{ pubDate }</div>
        </div>
        <div className={style.content} dangerouslySetInnerHTML={previewContent(content)} />
      </div>
    );
  }
}
