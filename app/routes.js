import React from 'react'

import {
        Route,
        DefaultRoute
} from 'react-router';

import App from './components/App/App';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Home from './components/Home/Home';
import SinglePost from './components/SinglePost/SinglePost';
import Admin from './components/Admin/Admin';
import EditPost from './components/EditPost/EditPost';
import BlogAdmin from './components/BlogAdmin/BlogAmin';

export default (
                <Route handler={App}>
                  <Route handler={LoginSignup} name='loginsignup' path='/login'/>
                  <Route handler={SinglePost} name='post' path='/posts/:postid' />
                  <Route handler={Admin} name='admin' path='/admin'>
                    <Route handler={CreatePost} name='createpost' path='createpost'/>
                    <Route handler={EditPost} name='editpost' path='editpost' />
                    <Route handler={BlogAdmin} name='blogadmin' path='blogadmin' />
                  </Route>

                  <DefaultRoute handler={Home} name='home'/>
                </Route>
              );
