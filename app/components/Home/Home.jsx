import React from 'react';
import postStore from '../../stores/PostStore';
import PostList from '../PostList/PostList';

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
        <PostList />
      </div>
    );
  }
}

export default HomePage;
