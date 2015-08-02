import React from 'react'

import {
        Route,
        DefaultRoute
} from 'react-router';

import App from './components/App/App';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Home from './components/Home/Home';
import SinglePost from './components/SinglePost/SinglePost'

export default (
                <Route handler={App}>
                  <Route handler={LoginSignup} name='loginsignup' path='/login'/>
                  <Route handler={SinglePost} name='post' path='/posts/:postid' />
                  <DefaultRoute handler={Home} name='home'/>
                </Route>
              );
