import React from 'react';
import actions from '../../actions/AppActions';
import { RouteHandler } from 'react-router';
import singlePostStore from '../../stores/SinglePostStore';
import connectToStores from 'alt/utils/connectToStores';
import Post from '../Post/Post'
var Parse = require('parse').Parse;

class SinglePost extends React.Component {
  constructor(props, context){
    super(props);
    actions.getSinglePost(context.router.getCurrentParams().postid);
  }
  static getStores() {
    return [singlePostStore];
  }

  static getPropsFromStores() {
    return singlePostStore.getState();
  }

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

  render() {
    return (
      <div>
      {this.renderPosts()}
        </div>
    )
  }
}

SinglePost.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default connectToStores(SinglePost);
