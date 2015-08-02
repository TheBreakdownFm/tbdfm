import alt from '../alt';
import actions from '../actions/AppActions';
import postApi from '../util/PostApi';

class PostStore {
  constructor() {
    this.bindActions(actions);
    this.posts = [];
  }

  onGetPosts(offset){
    postApi.getPosts(offset);
  }
  onGetAllPosts(){
    postApi.getAllPosts();
  }

  onGetPostsResult(result){
    if(result){this.posts = result};
  }
}

export default alt.createStore(PostStore, 'PostStore');
