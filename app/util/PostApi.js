import alt from '../alt'
import actions from '../actions/AppActions'
var Parse = require('parse').Parse;

let PostApi = {
  getPosts(offset){
    if(offset){

    } else {
      var Post = Parse.Object.extend("Post");
      var query = new Parse.Query(Post);
      query.limit(10);
      query.equalTo('published', true);
      query.find({
        success: function(results) {
          actions.getPostsResult(results);
        },
        error: function(error) {
          actions.getPostsResult(false);
        }
      });
    }
  },

  getAllPosts(){
      var Post = Parse.Object.extend("Post");
      var query = new Parse.Query(Post);
    query.descending('ceatedAt');

    query.find({
        success: function(results) {
          actions.getPostsResult(results);
        },
        error: function(error) {
          actions.getPostsResult(false);
        }
      });

  },
  getSinglePost(id){
    var Post = Parse.Object.extend("Post");
    var query = new Parse.Query(Post);
    query.equalTo('objectId', id);
    query.first({
      success: function(results) {
        actions.getSinglePostResult(results);
      },
      error: function(error) {
        actions.getSinglePostsResult(false);
      }
    });
  },

  savePost(post){
  },

  updatePost(post){
  }


}

export default PostApi;
