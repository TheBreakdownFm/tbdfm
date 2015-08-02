//import styles from './_App.scss';
import React from 'react/addons';
import ReactMixin from 'react-mixin';
import actions from '../../actions/AppActions';
import userapi from '../../util/UserApi';
import appstore from '../../stores/AppStore';
import singlePostStore from '../../stores/SinglePostStore';

import Post from '../Post/Post';
var Parse = require('parse').Parse;
import connectToStores from 'alt/utils/connectToStores';


class EditPost  extends React.Component {



  constructor(props, context) {
    super(props);
    this.state = {
      title: '',
      author: '',
      body: '',
      published: false
    }
    actions.getSinglePost(context.router.getCurrentParams().postid);
  }


  static getStores() {
    return [singlePostStore];
  }

  static getPropsFromStores() {
    return singlePostStore.getState();
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        title: nextProps.posts[0].attributes.title,
        author: nextProps.posts[0].attributes.author,
        body: nextProps.posts[0].attributes.body,
        published: nextProps.posts[0].attributes.published
    });
  }

  updatePost(e) {
    e.preventDefault();
    var Post = Parse.Object.extend("Post");
    var newPost = new Post();

    newPost.set("title", this.state.title);
    newPost.set("author", this.state.author);
    newPost.set("body", this.state.body);
    newPost.set("objectId", this.context.router.getCurrentParams().postid);
    newPost.save(null, {
      success: function (post) {
        // Execute any logic that should take place after the object is saved.
        alert('something ok maybe happen');
      },
      error: function (post, error) {
        alert('Well, shit. I Failed to create the new Post, the error was: ' + error.message);
      }
    });
  }

  //  updatePreview(e) {
  //  e.preventDefault();
  //  actions.getSinglePostResult(this.state);
  //}

  renderPosts() {
    let posts = this.props.posts.map((postie)=> {
      return (
        <div>
          <Post post={postie}/>
        </div>
      )
    })
    return posts;
  }

  renderForm() {
    return(
    <form>
      <input type="text" valueLink={this.linkState('title')} placeholder="Title" />
      <input type="text" valueLink={this.linkState('author')}placeholder="Author" />
      <input type="textarea" valueLink={this.linkState('body')}placeholder="Body" />
      <button onClick={this.updatePreview.bind(this)}> PREVIEW </button>
      <button onClick={this.updatePost.bind(this)} >update</button>
    </form>
    )
  }


  render() {
    return (
      <div>
        {this.renderForm()}
      <h3> Preview </h3>
        {this.renderPosts()}
      </div>
    );
  }
}

EditPost.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default connectToStores(EditPost);


ReactMixin(EditPost.prototype, React.addons.LinkedStateMixin);
