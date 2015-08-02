import styles from './_Body.scss';
import React from 'react';
import Menu from '../Menu/Menu';

let { PropTypes } = React;

export default class Body extends React.Component {

  static defaultProps = {
    posts: []
  };

  static propTypes = {
    //items: PropTypes.array.isRequired
  };
  //routes
  /*
   * /
   * /admin
   * /admin/posts
   * /admin/videos
   * /admin/preview
   * /posts/:postId
   * /videos
   * /videos/:date
   *
   * */
  render() {
    return (
      <div className={styles.body}>
      </div>
    );
  }
}
