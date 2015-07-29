import styles from './_App.scss';
import React from 'react/addons';
import ReactMixin from 'react-mixin';
import actions from '../../actions/AppActions';
import userapi from '../../util/UserApi';
import appstore from '../../stores/AppStore';

export default class LoginSignup  extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: ''
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

  signUp(e){
    //do sign up bullshit
  }

  inOrUp(){
    /*
     if (Parse.CurrentUser == null){
    */
  }

  render() {
      return (
          <form>
          <input type="text" valueLink={this.linkState('username')}placeholder="Username" />
          <input type="text" valueLink={this.linkState('password')} placeholder="Password" />
          <button onClick={this.logIn.bind(this)} >Get in</button>
          </form>
        )
  }
} 
ReactMixin(App.prototype, React.addons.LinkedStateMixin);
