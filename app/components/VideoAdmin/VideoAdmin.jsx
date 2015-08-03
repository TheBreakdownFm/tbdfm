import React from 'react';
import actions from '../../actions/AppActions';
import videoBlastStore from '../../stores/VideoBlastStore';
import connectToStores from 'alt/utils/connectToStores';
import { Link } from 'react-router';
var Parse = require('parse').Parse;

class VideoAdmin extends React.Component {
  constructor(){
    super();
    actions.getAllVideoBlasts();
  }

  static getStores() {
    return [videoBlastStore];
  }

  static getPropsFromStores() {
    return videoBlastStore.getState();
  }

  renderPosts() {
    let posts = this.props.videoBlasts.map((postie)=> {
      return (
        <ul>
          <li>
            <Link to='editvideoblast' params={{blastid: postie.id}}>{postie.createdAt} - {postie.attributes.published}</Link>
          </li>
        </ul>
      )
    })
    return posts;
  }

  render() {
    return (
      <div>
        <div>
          <Link to="newvideoblast">New Video Blast</Link>
        </div>
        {this.renderPosts()}
      </div>
    )
  }

}

export default connectToStores(VideoAdmin);
