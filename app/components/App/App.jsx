import styles from './_App.scss';
import React from 'react/addons';
//import ReactMixin from 'react-mixin';
//import actions from '../../actions/AppActions';
import Footer from '../Footer/Footer';
//import userapi from '../../util/UserApi';
import { RouteHandler, Link } from 'react-router';
var Parse = require('parse').Parse;

import appstore from '../../stores/AppStore';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: appstore.currentUser
    };
  }

  sesh() {
    if(Parse.User.current()){
      return(
        <Link to='/login'> Log Out </Link>
      );
    } else {
      return (
        <Link to='/login'> Log In </Link>
      );
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className={styles.app}>
        <h1><Link to="home">TBD.fm</Link></h1><h4>{this.sesh()}</h4>

              <RouteHandler key={this.context.router.getCurrentPath()} />
              <Footer />
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.func.isRequired
};



export default App;

