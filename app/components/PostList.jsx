import React from 'react';
import actions from '../actions/AppActions';
import postStore from '../stores/PostStore';
import connectToStores from '../../node_modules/alt/utils/connectToStores';
import Post from './Post'
var Parse = require('parse').Parse;

class PostList extends React.Component {
  constructor(){
    super();
    actions.getPosts();
  }

  static getStores() {
    return [postStore];
  }

  static getPropsFromStores() {
    return postStore.getState();
  }

  renderPosts() {
    let posts = this.props.posts.map((postie)=> {
      return (
        <div>

          <Post post={postie} key={postie.id}/>
          <hr />
        </div>
      )
    })
    return posts;
  }

  render() {
    return (
        <div>
          <h3>Posts</h3>
          {this.renderPosts()}
        </div>
      )
  }

}

export default connectToStores(PostList);
