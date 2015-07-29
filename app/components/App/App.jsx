import styles from './_App.scss';
import React from 'react/addons';
import ReactMixin from 'react-mixin';
import actions from '../../actions/AppActions';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import userapi from '../../util/UserApi';
import appstore from '../../stores/AppStore';
export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: appstore.currentUser,
      username: '',
      password: ''
    };
  }

  componentDidMount() {
  }

  signInOrUserName() {
    if(this.state.user ){
      return (
        <h2> hello {this.state.user} </h2>
      );
    } else {
      return (
          <a href="/signin">Sign In</a>
          )
    }
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className={styles.app}>
      {this.signInOrUserName()}
        <Body />
        <Footer />
      </div>
    );
  }

}

