import React from 'react';
import postStore from '../../stores/PostStore';
import PostList from '../PostList/PostList';
import { RouteHandler, Link } from 'react-router';


var Parse = require('parse').Parse;

class Admin extends React.Component {

  constructor() {
    super();
    this.state = {
      user: Parse.User.current()
    }
  }


  render() {
    return (
      <div className={'adminhome'}>
        <h1><Link to="admin">TBD.fm</Link></h1>
        <RouteHandler key={this.context.router.getCurrentPath()} />
      </div>
    );
  }
}

Admin.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Admin;
