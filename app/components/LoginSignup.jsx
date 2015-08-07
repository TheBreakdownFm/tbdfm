//import styles from './_App.scss';
import React from '../../node_modules/react/addons';
import ReactMixin from 'react-mixin';
import actions from '../actions/AppActions';
import userapi from '../util/UserApi';
import appstore from '../stores/AppStore';
var Parse = require('parse').Parse;

class LoginSignup extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      msgs: ''
    };
  }

  alreadyIn(){
     if (Parse.User.current() != null){
      return true;
    }
  }

  logOut(e) {
    Parse.User.logOut().then(()=>{this.context.router.transitionTo('/')},null);

  }


  logIn(e){
    e.preventDefault();
    let router = this.context.router;
    let that = this;
    Parse.User.logIn(this.state.username, this.state.password, {
      success: function(user) {
        actions.logInResult({user: user});
        router.transitionTo('/');
      },
      error: function(user, error) {
        that.state.msgs = 'Something has gone wrong. Sorry :(';

        actions.logInResult({user: user, error: error});
      }
    });

  }

  signUp(e){
    //do sign up bullshit
  }
  render() {

    if(this.alreadyIn()){
      return (
        <div>
          {Parse.User.current().username}
          <button onClick={this.logOut.bind(this)}> Log Out </button>
        </div>
      )
    } else {
          return (
                <form>
                  <input type="text" valueLink={this.linkState('username')}placeholder="Username" />

                  <input type="password" valueLink={this.linkState('password')} placeholder="Password" />
                <button onClick={this.logIn.bind(this)} >Get in</button>
                  <br/>
                  <span>{this.state.msgs}</span>
                </form>
      );
    }
  }
}

LoginSignup.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default LoginSignup;

ReactMixin(LoginSignup.prototype, React.addons.LinkedStateMixin);
