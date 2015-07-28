import alt from '../alt'

class appActions {
  constructor() {
    this.generateActions('appStart', 'getPosts');
   }
}
 
export default alt.createActions(appActions);
