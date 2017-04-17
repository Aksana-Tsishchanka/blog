import React, { PropTypes } from 'react';
import style from './Icon.css';

const Icon = ({ type, className }) => {
    const camel = !!type ? type.replace(/[-_]([a-z])/gi, g => g[1].toUpperCase()) : null;
    return (
        <span className={ `${!!camel ? style[camel] : ''}${className ? ` ${className}` : ''}` } />
    );
};

Icon.defaultProps = {
    type: '',
    className: ''
};

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Icon;
