//import styles from './_App.scss';
import React from 'react/addons';
import ReactMixin from 'react-mixin';
import actions from '../../actions/AppActions';
import userapi from '../../util/UserApi';
import appstore from '../../stores/AppStore';
var Parse = require('parse').Parse;

class NewPost  extends React.Component {


  constructor() {
    super();
    this.state = {
        title: '',
        author: '',
        body: '',
        published: false
    };

  }

  createPost(e){
    e.preventDefault();
    var Post = Parse.Object.extend("Post");
    var newPost = new Post();

    newPost.set("title", this.state.title);
    newPost.set("author", this.state.author);
    newPost.set("body", this.state.body);

    let router = this.context.router;

    newPost.save(null, {
      success: function(post) {
        router.transitionTo('/admin/editpost/' + post.id);
      },
      error: function(post, error) {
        alert('Well, shit. I Failed to create the new Post, the error was: ' + error.message);
      }
    });
  }

  render() {
      return (
        <form>
          <input type="text" valueLink={this.linkState('title')} placeholder="Title" />
          <input type="text" valueLink={this.linkState('author')}placeholder="Author" />
          <textarea  valueLink={this.linkState('body')}placeholder="Body" />
          <button onClick={this.createPost.bind(this)} >Create</button>
          <p> Create will only create, you can publish from the preview/edit screen. check your work :)</p>
        </form>

      );
  }
}

NewPost.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default NewPost;


ReactMixin(NewPost.prototype, React.addons.LinkedStateMixin);
