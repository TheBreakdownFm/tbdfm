import alt from '../alt'
import actions from '../actions/AppActions'
var Parse = require('parse').Parse;

let PostApi = {

  savePost(postValues){
    var Post = Parse.Object.extend("Post");
    var newPost = new Post();

    newPost.set("title", postValues.title);
    newPost.set("author", postValues.author);
    newPost.set("body", postValues.body);
    newPost.set('published', postValues.published);
    newPost.set('type', postValues.type);
    newPost.save(null, {
      success: function (post) {
        // Execute any logic that should take place after the object is saved.
        actions.savePostResult(post);
      },
      error: function (post, error) {
        alert('Well, shit. I Failed to create the new Post, the error was: ' + error.message);
      }
    });
  },

  updatePost(postValues){
    var Post = Parse.Object.extend("Post");
    var newPost = new Post();

    newPost.set("title", postValues.title);
    newPost.set("author", postValues.author);
    newPost.set("body", postValues.body);
    newPost.set('published', postValues.published);
    newPost.set("objectId", postValues.objectId);
    newPost.save(null, {
      success: function (post) {
        // Execute any logic that should take place after the object is saved.
        actions.updatePostResult(post);
      },
      error: function (post, error) {
        alert('Well, shit. I Failed to create the new Post, the error was: ' + error.message);
      }
    });
  },
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
  getPostsOfType(type, offset){

  }


}

export default PostApi;
