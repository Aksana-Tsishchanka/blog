import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import style from './Article.css';
import * as calculateDateFrom from '../../utils/calculateDateFrom';
import ScrollableBar from '../ScrollableBar/ScrollableBar';
import Icon from '../Icon/Icon';
import formatNumber from '../../utils/formatNumber';

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
      <ScrollableBar place="bottom">
        <footer className={style.footer}>
          <div className={style.likesContainer}>
            <div className={style.iconContainer}>
              <Icon type="likes" />
            </div>
            { formatNumber(likeCounter) } likes
          </div>
          <div className={style.homeContainer}>
            <Link to="/" className={style.link}>
              <div className={style.iconHomeContainer}>
                <Icon type="home" /> Choose another article
              </div>
            </Link>
          </div>
        </footer>
      </ScrollableBar>
    </div>
  );
};


Article.defaultProps = {
  author: '',
  pubDate: '',
  coverImage: '',
  title: '',
  content: '',
  likeCounter: 0,
  avatar: '',
};

Article.propTypes = {
  author: PropTypes.string.isRequired,
  pubDate: PropTypes.string,
  coverImage: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  likeCounter: PropTypes.number,
  avatar: PropTypes.string,
};

export default Article;

