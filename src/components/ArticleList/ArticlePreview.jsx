import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import * as calculateDateFrom from '../../utils/calculateDateFrom';
import style from './ArticlePreview.css';


function previewContent(content) {
  let truncatedContent;
  if (content.length > 300){
    const limit = 300,
      endPosition = content.slice(limit).search(/\s/);
    truncatedContent = `${content.substring(0, limit + endPosition)}`;
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
          <a href="" onClick={this.openArticle} className={style.link}>
              <h2 className={style.title}>
                { title }
              </h2>
              <div className={style.info}>
                  <div className={style.author}>{ author }</div>
                  <div className={style.time}> {calculateDateFrom.timeFrom(new Date(pubDate))}</div>
              </div>
              <div className={style.content} dangerouslySetInnerHTML={previewContent(content)} />
              <div className={style.more}>... read more</div>
          </a>
      </div>
    );
  }
}
