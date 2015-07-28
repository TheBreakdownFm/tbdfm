import alt from '../alt'
import actions from '../actions/AppActions'

class AppStore {
  constructor() {
    this.bindActions(actions);
    this.appConfig = {};
  }
}

export default alt.createStore(AppStore, 'AppStore');
