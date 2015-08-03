//import styles from './_App.scss';
import React from 'react/addons';
import ReactMixin from 'react-mixin';
import actions from '../../actions/AppActions';
import videoBlastApi from '../../util/UserApi';
var Parse = require('parse').Parse;

class NewVideoBlast  extends React.Component {


  constructor() {
    super();
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

  }

  createVideoBlast(e){
    e.preventDefault();
    var VideoBlast = Parse.Object.extend("VideoBlast");
    var newBlast = new VideoBlast();

      newBlast.set('video1url', this.state.video1url);
      newBlast.set('video2url', this.state.video2url);
      newBlast.set('video3url', this.state.video3url);
      newBlast.set('video1desc', this.state.video1desc);
      newBlast.set('video2desc', this.state.video2desc);
      newBlast.set('video3desc', this.state.video3desc);
      newBlast.set('published', false);

    let router = this.context.router;

    newBlast.save(null, {
      success: function(blast) {
        router.transitionTo('/admin/editvideoblast/' + blast.id);
      },
      error: function(blast, error) {
        alert('Well, shit. I Failed to create the new Video Blast, the error was: ' + error.message);
      }
    });
  }

  render() {
    return (
      <form>
        <input type="text" valueLink={this.linkState('video1url')} placeholder="Video 1 URL" />
        <input type="text" valueLink={this.linkState('video2url')} placeholder="Video 2 URL" />
        <input type="text" valueLink={this.linkState('video3url')} placeholder="Video 3 URL" />
        <textarea valueLink={this.linkState('video1desc')}placeholder="Video 1 Description" />
        <textarea valueLink={this.linkState('video2desc')}placeholder="Video 2 Description" />
        <textarea valueLink={this.linkState('video3desc')}placeholder="Video 3 Description" />
        <button onClick={this.createVideoBlast.bind(this)} >Create</button>
        <p> Create will only create, you can publish from the preview/edit screen. check your work :)</p>
      </form>

    );
  }
}

NewVideoBlast.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default NewVideoBlast;


ReactMixin(NewVideoBlast.prototype, React.addons.LinkedStateMixin);
