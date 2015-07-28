import styles from './_App.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

function getAppState() {
  return {
    items: ItemsStore.getAll()
  };
}

export default class App extends React.Component {

  state = getAppState()

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onChange = () => {
  }

  render() {
    return (
      <div className={styles.app}>
        <Body />
        <Footer />
      </div>
    );
  }
}
