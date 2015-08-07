//import styles from './_App.scss';
import React from 'react/addons';
import ReactMixin from 'react-mixin';
import actions from '../../actions/AppActions';
import userapi from '../../util/UserApi';
import appstore from '../../stores/AppStore';
import SingleVideoBlast from '../SingleVideoBlast/SingleVideoBlast'
import videoBlastStore from '../../stores/VideoBlastStore';

import Post from '../Post';
var Parse = require('parse').Parse;
import connectToStores from 'alt/utils/connectToStores';


class EditVideoBlast  extends React.Component {



  constructor(props, context) {
    super(props);
    this.state = {
      video1url: '',
      video2url: '',
      video3url: '',
      video1desc: '',
      video2desc: '',
      video3desc: '',
      date: '',
      published: false
    };
    actions.getSingleVideoBlast(context.router.getCurrentParams().blastid);
  }


  static getStores() {
    return [videoBlastStore];
  }

  static getPropsFromStores() {
    return videoBlastStore.getState();
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        video1url: nextProps.videoBlasts[0].attributes.video1url,
        video2url: nextProps.videoBlasts[0].attributes.video2url,
        video3url: nextProps.videoBlasts[0].attributes.video3url,
        video1desc: nextProps.videoBlasts[0].attributes.video1desc,
        video2desc: nextProps.videoBlasts[0].attributes.video2desc,
        video3desc: nextProps.videoBlasts[0].attributes.video3desc,
        published: nextProps.videoBlasts[0].attributes.published
      });
  }



  updateVideoBlast(e){
    e.preventDefault();
    var VideoBlast = Parse.Object.extend("VideoBlast");
    var newBlast = new VideoBlast();

    newBlast.set('video1url', this.state.video1url);
    newBlast.set('video2url', this.state.video2url);
    newBlast.set('video3url', this.state.video3url);
    newBlast.set('video1desc', this.state.video1desc);
    newBlast.set('video2desc', this.state.video2desc);
    newBlast.set('video3desc', this.state.video3desc);
    newBlast.set('published', this.state.published);
    newBlast.set("objectId", this.context.router.getCurrentParams().blastid);

    let router = this.context.router;

    newBlast.save(null, {
      success: function(blast) {
        alert('something ok maybe happen');

      },
      error: function(blast, error) {
        alert('Well, shit. I Failed to update the  Video Blast, the error was: ' + error.message);
      }
    });
  }


  renderBlasts() {
    let arrp = [];
    arrp.push({attributes: this.state, id: this.context.router.getCurrentParams().blastid});
    let blasts = arrp.map((blasty)=> {
      return (
        <div>
          <SingleVideoBlast blast={blasty}/>
        </div>
      )
    });
    return blasts;
  }

  renderForm() {
    return(
      <form>
        <input type="text" valueLink={this.linkState('video1url')} placeholder="Video 1 URL" />
        <input type="text" valueLink={this.linkState('video2url')} placeholder="Video 2 URL" />
        <input type="text" valueLink={this.linkState('video3url')} placeholder="Video 3 URL" />
        <textarea valueLink={this.linkState('video1desc')}placeholder="Video 1 Description" />
        <textarea valueLink={this.linkState('video2desc')}placeholder="Video 2 Description" />
        <textarea valueLink={this.linkState('video3desc')}placeholder="Video 3 Description" />
        <input type="checkbox" checkedLink={this.linkState('published')} />

        <button onClick={this.updateVideoBlast.bind(this)} >Update</button>
      </form>
    )
  }


  render() {
    return (
      <div>
        {this.renderForm()}
        <h3> Preview </h3>
        {this.renderBlasts()}
      </div>
    );
  }
}

EditVideoBlast.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default connectToStores(EditVideoBlast);


ReactMixin(EditVideoBlast.prototype, React.addons.LinkedStateMixin);
