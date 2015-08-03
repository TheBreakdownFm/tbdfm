import React from 'react';
import actions from '../../actions/AppActions';
import { RouteHandler } from 'react-router';
import videoBlastStore from '../../stores/VideoBlastStore';
import connectToStores from 'alt/utils/connectToStores';
import SingleVideoBlast from '../SingleVideoBlast/SingleVideoBlast'
var Parse = require('parse').Parse;

class VideoBlast extends React.Component {
  constructor(props, context){
    super(props);
    let videoBlastIndex = context.router.getCurrentParams().blastid ? context.router.getCurrentParams().blastid : 'first';
    actions.getSingleVideoBlast(videoBlastIndex);
  }
  static getStores() {
    return [videoBlastStore];
  }

  static getPropsFromStores() {
    return videoBlastStore.getState();
  }

  renderVideoBlast() {
    let blasts = this.props.videoBlasts.map((blast)=> {
      return (
          <SingleVideoBlast blast={blast} key={blast.id}/>
      )
    })
    return blasts;
  }

  render() {
    return (
      <div>
        <h2>Videos</h2>
        {this.renderVideoBlast()}
      </div>
    )
  }


}

VideoBlast.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default connectToStores(VideoBlast);
