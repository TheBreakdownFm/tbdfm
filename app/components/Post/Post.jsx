import {Link} from 'react-router';
import actions from '../../actions/AppActions';
import React from 'react';
import postStore from '../../stores/PostStore';
var Parse = require('parse').Parse;



class PostList extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <Link to='post' params={{postid: this.props.post.id}}> {this.props.post.attributes.title}</Link>
        <h4>{this.props.post.attributes.author} | {this.props.post.pubDate} </h4>
        <p>{this.props.post.attributes.body}</p>
      </div>
    )
  }

}

export default PostList;
