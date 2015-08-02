import {Link} from 'react-router';
import actions from '../../actions/AppActions';
import React from 'react';
import postStore from '../../stores/PostStore';
var Parse = require('parse').Parse;
var Markdown = require('react-remarkable');


class PostList extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <Link to='post' params={{postid: this.props.post.id}}> {this.props.post.attributes.title}</Link>
        <h4>{this.props.post.attributes.author} | {this.props.post.pubDate} </h4>
        <Markdown source={this.props.post.attributes.body}/>
      </div>
    )
  }

}

export default PostList;
