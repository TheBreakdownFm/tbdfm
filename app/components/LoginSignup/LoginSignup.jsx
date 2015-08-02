//import styles from './_App.scss';
import React from 'react/addons';
import ReactMixin from 'react-mixin';
import actions from '../../actions/AppActions';
import userapi from '../../util/UserApi';
import appstore from '../../stores/AppStore';
var Parse = require('parse').Parse;

class LoginSignup extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: ''
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
    Parse.User.logIn(this.state.username, this.state.password, {
      success: function(user) {
        actions.logInResult({user: user});
        router.transitionTo('/');
      },
      error: function(user, error) {
        actions.logInResult({user: user, error: error});
        router.transitionTo('/');
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
                <input type="text" valueLink={this.linkState('password')} placeholder="Password" />
                <input type="text" valueLink={this.linkState('username')}placeholder="Username" />
                <button onClick={this.logIn.bind(this)} >Get in</button>
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
