import React from 'react';
import postStore from '../../stores/PostStore';
import PostList from '../PostList';
import { RouteHandler, Link } from 'react-router'
import LoginSignup from '../LoginSignup'
var Parse = require('parse').Parse;

class Admin extends React.Component {

  constructor() {
    super();
    this.state = {
      admin: false
    }
    this.ucanhaz();
  }

  ucanhaz() {

    if(Parse.User.current()) {
      let authorized = false;
      console.log('Before test: Auth = ' + authorized);
      let that = this;
      var queryRole = new Parse.Query(Parse.Role);
      queryRole.equalTo('name', 'admin');
      queryRole.first({
        success: function (result) { // Role Object
          console.log("Okay, that's a start... in success 1 with results: " + result);

          var role = result;
          var adminRelation = new Parse.Relation(role, 'users');
          var queryAdmins = adminRelation.query();

          queryAdmins.equalTo('objectId', Parse.User.current().id);
          queryAdmins.first({
            success: function (result) {    // User Object
              var user = result;
              user ? authorized = that.setState({admin: true}) : console.log('Shiet, user not Admin');
            }
          });
        },
        error: function (error) {
          console.log("Bruh, can't find the Admin role");
        }
      });
    }

  }

  rednderBasedOnPermission(){
    if (this.state.admin) {
      return (
        <div className={'adminhome'}>
          <RouteHandler key={this.context.router.getCurrentPath()} />
        </div>
      );
    }
  }


  render() {
    return (
      <div>
        <h1><Link to="admin">Admin</Link></h1>
        <Link to='blogadmin' >Blog Admin</Link>
        <Link to='videoadmin' > Video Admin</Link>
        {this.rednderBasedOnPermission()}
      </div>
    );
  }
}

Admin.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Admin;
