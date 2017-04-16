import React, { Component } from 'react';
import style from './ScrollableBar.css';

export default class ScrollableBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isHide: false,
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
    const classHide = this.state.isHide ? 'hide' : '';
    return (
      <div className={`${style.bar}${classHide ? ` ${style.hide}` : ''}`}>
        topbar
      </div>
    );
  }
}