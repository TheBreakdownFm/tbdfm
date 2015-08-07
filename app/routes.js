import React from 'react'


import {Route, DefaultRoute} from 'react-router';

import App from './components/App';
import LoginSignup from './components/LoginSignup';
import Home from './components/Home';
import SinglePost from './components/SinglePost';
import Admin from './components/Admin/Admin';
import EditPost from './components/EditPost/EditPost';
import BlogAdmin from './components/BlogAdmin/BlogAdmin';
import NewPost from './components/NewPost/NewPost';
import VideoAdmin from './components/VideoAdmin/VideoAdmin';
import NewVideoBlast from './components/NewVideoBlast/NewVideoBlast';
import EditVideoBlast from './components/EditVideoBlast/EditVideoBlast';
import VideoBlast from './components/VideoBlast/VideoBlast';

export default (
                <Route handler={App}>
                  <Route handler={LoginSignup} name='loginsignup' path='/login'/>
                  <Route handler={SinglePost} name='post' path='/posts/:postid?' />
                  <Route handler={VideoBlast} name='videoblast' path='/videoblasts/:blastid?'/>
                  <Route handler={Admin} name='admin' path='/admin'>
                    <Route handler={NewPost} name='newpost' path='newpost'/>
                    <Route handler={EditPost} name='editpost' path='editpost/:postid' />

                  </Route>

                  <DefaultRoute handler={Home} name='home'/>


                </Route>
              );
