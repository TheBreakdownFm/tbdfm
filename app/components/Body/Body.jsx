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

  render() {
    return (
      <div className={styles.body}>
      </div>
    );
  }
}
