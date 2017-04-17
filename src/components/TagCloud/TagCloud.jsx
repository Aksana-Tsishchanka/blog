import React, { Component, PropTypes } from 'react';
import style from './TagCloud.css';

export default class TagCloud extends Component {
  static propTypes = {
    tags: PropTypes.oneOfType([
      PropTypes.array,
    ]),
    tagHandler: PropTypes.func,
  };

  static defaultProps = {
    tags: [],
    tagHandler: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedTag: null,
    };
  }
  onClickHandle = ({ currentTarget: { value } }) => {
    this.props.tagHandler(value);
  }
  /* eslint-disable react/no-array-index-key */
  createCloudTag = (tags, onClickHandler) => {
    if (Array.isArray(tags)) {
      return tags.map((tag, index) => (
        <button
          type="radio"
          className={style.item}
          value={tag}
          key={index}
          onClick={onClickHandler}
        >
          { tag }</button>
      ));
    }
    return null;
  };
  /* eslint-enable react/no-array-index-key */

  render() {
    const { tags } = this.props;
    return (
        <div>
            <h2 className={style.titleTag}>Search by tag: </h2>
            <div className={style.container}>
                { this.createCloudTag(tags, this.onClickHandle) }
            </div>
        </div>
    );
  }
}

