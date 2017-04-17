import React, { Component } from 'react';
import style from './ScrollableBar.css';

export default class ScrollableBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
        isHide: false,
        place: props.place || 'top',
    };
  }

  hideBar = () => {
    let { isHide } = this.state;

    window.scrollY > this.prev ?
      !isHide && this.setState({ isHide: true })
      :
      isHide && this.setState({ isHide: false });
    this.prev = window.scrollY;
  };

  componentDidMount() {
    window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
  }

  render() {
      const { isHide, place } = this.state;
    const classHide = isHide ? 'hide' : '';
    return (
      <div className={`${style.bar} ${style[place]} ${classHide ? ` ${style.hide}` : ''}`}>
          { this.props.children }
      </div>
    );
  }
}