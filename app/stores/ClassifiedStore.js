import alt from '../alt';
import actions from '../actions/AppActions';
import classifiedApi from '../util/ClassifiedApi';

class ClassifiedStore {
  constructor() {
    this.bindActions(actions);
    this.classifieds = [];
  }

  onGetClassifieds(offset){
    classifiedApi.getPosts(offset);
  }
  onGetAllClassifieds(){
    classifiedApi.getAllPosts();
  }



  onGetClassifiedsResult(result){
    if(result){this.classifieds = result};
  }
}

export default alt.createStore(ClassifiedStore, 'ClassifiedStore');
