import React, { Component, PropTypes } from 'react';
import style from './ScrollableBar.css';

export default class ScrollableBar extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.element,
    ]),
    place: PropTypes.string,
  };
  static defaultProps = {
    children: null,
    place: 'top',
  };

  constructor(props) {
    super(props);

    this.state = {
      isHide: false,
      place: props.place || 'top',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
  }

  hideBar = () => {
    const { isHide } = this.state;
    if (window.scrollY > this.prev) {
      this.setState({ isHide: true });
    } else if (isHide) {
      this.setState({ isHide: false });
    }
    this.prev = window.scrollY;
  };

  render() {
    const { isHide, place } = this.state;
    const classHide = isHide ? 'hide' : '';
    return (
      <div className={`${style.bar} ${style[place]} ${classHide ? ` ${style.hide}` : ''}`}>
        {this.props.children}
      </div>
    );
  }
}
