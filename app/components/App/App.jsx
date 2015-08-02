import styles from './_App.scss';
import React from 'react/addons';
//import ReactMixin from 'react-mixin';
//import actions from '../../actions/AppActions';
import Footer from '../Footer/Footer';
//import userapi from '../../util/UserApi';
import { RouteHandler } from 'react-router';
import appstore from '../../stores/AppStore';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: appstore.currentUser
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className={styles.app}>
              <h1> TBD.FM </h1>
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

