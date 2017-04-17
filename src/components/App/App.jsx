import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import style from './App.css';
import ScrollableBar from '../ScrollableBar/ScrollableBar';

const App = props => (
  <div>
    <ScrollableBar>
      <header className={style.header}>
        <Link to="/" className={style.link}>Awesome blog</Link>
      </header>
    </ScrollableBar>
    { props.children }
  </div>
);

App.defaultProps = {
  children: '',
};

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

export default App;
