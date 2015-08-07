import alt from '../alt';
import actions from '../actions/AppActions';
import classifiedAPi from '../util/ClassifiedApi';

class SingleClassifiedStore {
  constructor() {
    this.bindActions(actions);
    this.classifieds = [];
  }

  onGetSinglClassified(classifiedid){
    classifiedApi.getSingleClassified(classifiedid);
  }

  onGetSingleClassifiedResult(result){
    console.log(result);
    let oneclassified = [];
    oneclassified.push(result);
    this.classifieds = oneclassified;
  }
}

export default alt.createStore(SingleClassifiedStore, 'SingleClassifiedStore');
