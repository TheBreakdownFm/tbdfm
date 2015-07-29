import alt from '../alt'
import actions from '../actions/AppActions'

class AppStore {
  constructor() {
    this.bindActions(actions);
    this.appConfig = {};
    this.currentUser = {};
  }

  onLogInResult(result){
    console.log(result);
    this.currentUser = result.user;
  }
  
  onSignUpResult(result){
    console.log(result);
    this.currentUser = result.user;
  }
  
}

export default alt.createStore(AppStore, 'AppStore');
