import React, { PropTypes } from 'react';
import style from './App.css';
import ScrollableBar from '../ScrollableBar/ScrollableBar';

const App = props => (
  <div>
    <ScrollableBar/>
    {/*<header className={style.header}>Awesome blog</header>*/}
    { props.children }
  </div>
);

App.defaultProps = {
  children: null,
};

App.propTypes = {
  children: PropTypes.arrayOf([
    PropTypes.component,
  ]),
};

export default App;
