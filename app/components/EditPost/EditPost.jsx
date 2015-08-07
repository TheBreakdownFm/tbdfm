//import styles from './_App.scss';
import React from 'react/addons';
import ReactMixin from 'react-mixin';
import actions from '../../actions/AppActions';
import userapi from '../../util/UserApi';
import appstore from '../../stores/AppStore';
import singlePostStore from '../../stores/SinglePostStore';

import Post from '../Post';
var Parse = require('parse').Parse;
import connectToStores from 'alt/utils/connectToStores';


class EditPost  extends React.Component {



  constructor(props, context) {
    super(props);
    this.state = {
      title: '',
      author: '',
      body: '',
      type: '',
      imageUrl: '',
      videoUrl: '',
      podcastUrl: '',
      published: false
    }
    actions.getSinglePost(context.router.getCurrentParams().postid);
  }


  static getStores() {
    return [singlePostStore];
  }

  static getPropsFromStores() {
    return singlePostStore.getState();
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        title: nextProps.posts[0].attributes.title,
        author: nextProps.posts[0].attributes.author,
        body: nextProps.posts[0].attributes.body,
        published: nextProps.posts[0].attributes.published
    });
  }

  updatePost(e) {
    e.preventDefault();
    let newPostVals = this.state;
    newPostVals.type = 'blag';
    newPostVals.objectId = this.context.router.getCurrentParams().postId;
    actions.updatePost(newPostVals);
  }

  renderPosts() {
    let arrp = [];
    arrp.push({attributes: this.state, id: this.context.router.getCurrentParams().postid});
    let posts = arrp.map((postie)=> {
      return (
        <div>
          <Post post={postie}/>
        </div>
      )
    })
    return posts;
  }

  renderForm() {
    return(
    <form>
      <select valueLink={this.linkState('type')}>
        <option value='blag'> Blag </option>
        <option value='podcast'> Podcast </option>
        <option value='video'> Podcast </option>
      </select>
      <br/>
      <input type="text" valueLink={this.linkState('title')} placeholder="Title" />
      <br/>
      <input type="text" valueLink={this.linkState('author')}placeholder="Author" />
      <br/>
      <input type='text' valueLink={this.linkState('videoUrl')} placeholder='Video Url'/>
      <br/>
      <input type='text' valueLink={this.linkState('imageUrl')} placeholder='Image Url' />
      <br/>
      <input type='text' valueLink={this.linkState('podcastUrl')} placeholder='Podcast Url' />
      <br/>
      <button onClick={this.updatePost.bind(this)} >update</button>
    </form>
    )
  }


  render() {
    return (
      <div>

        {this.renderForm()}
      <h3> Preview </h3>
        {this.renderPosts()}
      </div>
    );
  }
}

EditPost.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default connectToStores(EditPost);


ReactMixin(EditPost.prototype, React.addons.LinkedStateMixin);
