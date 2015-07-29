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

  logIn(e){
var Parse = require('parse').Parse;
Parse.initialize("lQwARpSuxxOjSj7eqRFvTO4AnzR7AeWN58SDEnfc", "y4Ds9YFPso1QIoc0w6QaH4pxGDx7fsQWXXvnWdHu");
    e.preventDefault();
    Parse.User.logIn(this.state.username, this.state.password, {
      success: function(user) {
        actions.logInResult({user: user});
      },
      error: function(user, error) {
        actions.logInResult({user: user, error: error});
      }
    });
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
          <form>
          <input type="text" valueLink={this.linkState('username')}placeholder="Username" />
          <input type="text" valueLink={this.linkState('password')} placeholder="Password" />
          <button onClick={this.logIn.bind(this)} >Get in</button>
          </form>
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
ReactMixin(App.prototype, React.addons.LinkedStateMixin);

