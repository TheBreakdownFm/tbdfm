import React from 'react';
import actions from '../../actions/AppActions';
import postStore from '../../stores/PostStore';
import connectToStores from 'alt/utils/connectToStores';
import { Link } from 'react-router';
var Parse = require('parse').Parse;

class PostList extends React.Component {
  constructor(){
    super();
    actions.getAllPosts();
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
        <ul>
          <li>
            <Link to='editpost' params={{postid: postie.id}}>{postie.attributes.title} - {postie.attributes.published}</Link>
          </li>
        </ul>
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

export default connectToStores(PostList);
