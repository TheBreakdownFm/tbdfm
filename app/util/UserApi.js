import parseInit from './ParseInit';
import alt from '../alt';
import actions from '../actions/AppActions';

let UserApi = {
  logIn: function(uname, pass){
Parse.User.logIn(uname, pass, {
  success: function(user) {
    // Do stuff after successful login.
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
  }
});
   actions.logInResult({user: user, error: error});
  },

  signUp: function(uname, pass,email){
var user = new Parse.User();
user.set("username", uname);
user.set("password", pass);
user.set("email", email);


user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    console.log("Error: " + error.code + " " + error.message);
  }
});

  }
}
