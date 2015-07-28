import alt from '../alt'
import actions from '../actions/AppActions'

class PostStore {
  constructor() {
    this.bindActions(actions);
    this.posts = [];
  }

  onGetPosts(offset){

  }

  onPostsReturned(posts){
    this.posts.push(posts);
  }
}

export default alt.createStore(PostStore, 'PostStore');
