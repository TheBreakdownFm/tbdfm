import alt from '../alt';
import actions from '../actions/AppActions';
import postApi from '../util/PostApi';

class PostStore {
  constructor() {
    this.bindActions(actions);
    this.posts = [];
  }

  onGetSinglePost(postid){
    postApi.getSinglePost(postid);
  }

  onGetSinglePostResult(result){
    console.log(result);
    let onepost = [];
    onepost.push(result);
    this.posts = onepost;
  }
}

export default alt.createStore(PostStore, 'PostStore');
