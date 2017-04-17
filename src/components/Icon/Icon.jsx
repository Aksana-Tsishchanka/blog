import React, { PropTypes } from 'react';
import style from './Icon.css';

const Icon = ({ type }) => {
  const camel = !!type ? type.replace(/[-_]([a-z])/gi, g => g[1].toUpperCase()) : null;
  return (
    <span className={`${!!camel ? style[camel] : ''}`} />
  );
};

Icon.defaultProps = {
  type: '',
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
