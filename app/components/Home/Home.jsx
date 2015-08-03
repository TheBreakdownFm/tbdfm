import React from 'react';
import postStore from '../../stores/PostStore';
import PostList from '../PostList/PostList';
import VideoBlast from '../VideoBlast/VideoBlast';

var Parse = require('parse').Parse;

class HomePage extends React.Component {

  constructor() {
    super();
    this.state = {
      user: Parse.User.current()
    }
  }

  loadPosts() {

  }


  render() {
    return (
      <div className={'page__home'}>
        <VideoBlast />

        <PostList />
      </div>
    );
  }
}

export default HomePage;
