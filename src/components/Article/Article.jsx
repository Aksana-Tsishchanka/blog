import React from 'react';
import style from './Article.css';
import * as calculateDateFrom from '../../utils/calculateDateFrom';


const Article = (props) => {
  const { author, pubDate, coverImage, title, content, likeCounter, avatar } = props;
  return (
    <div className={style.container}>
      <main className={style.article}>
        <div className={style.infoContainer}>
          <div className={style.avatar}>
            <img src={avatar} alt="blogImg" />
          </div>
          <div className={style.info}>
            <div className={style.author}>{ author } </div>
            <div className={style.time}> {calculateDateFrom.timeFrom(new Date(pubDate))}</div>
          </div>
        </div>
        <div className={style.imgContainer}>
          <img className={style.img} src={coverImage} alt="blogImg" />
        </div>
        <article className={style.content}>
          <h3 className={style.title}>
            { title}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </main>
      <footer>
        { likeCounter }
      </footer>
    </div>
  );
};

export default Article;

