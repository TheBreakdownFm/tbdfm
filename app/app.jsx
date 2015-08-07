import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import React from 'react/addons';
import App from './components/App';
import Router from 'react-router';
import routes from './routes';
require("./skeleton.css");

var Parse = require('parse').Parse;
Parse.initialize('lQwARpSuxxOjSj7eqRFvTO4AnzR7AeWN58SDEnfc', 'y4Ds9YFPso1QIoc0w6QaH4pxGDx7fsQWXXvnWdHu');

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
