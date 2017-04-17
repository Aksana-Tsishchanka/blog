import React, { Component, PropTypes } from 'react';
import Article from './Article';
import sendRequest from '../../api/api';


export default class ArticleContainer extends Component {
  static propTypes = {
    params: PropTypes.oneOfType([
      PropTypes.object,
    ]),
  }
  static defaultProps = {
    params: {},
  }

  constructor(props) {
    super();

    this.state = {
      article: null,
      slug: props.params.slug,
    };
  }

  componentDidMount() {
    sendRequest(`articles?slug=${this.state.slug}`)
      .then(response => this.setState({
        article: response[0],
      }),
      );
  }

  render() {
    const { article } = this.state;
    return (
      <div>
        {this.state.article ?
          <Article {...article} />
          :
          <div style={{ margin: '50px' }}>Article not found</div>
        }
      </div>);
  }
}
