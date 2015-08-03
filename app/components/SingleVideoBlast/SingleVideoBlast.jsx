import {Link} from 'react-router';
import actions from '../../actions/AppActions';
import React from 'react';
import postStore from '../../stores/PostStore';
var Parse = require('parse').Parse;
var Markdown = require('react-remarkable');


class SingleVideoBlast extends React.Component {
  constructor(){
    super();
  }

  getEmbedForVideo(videourl){
      let video_id = videourl.split('v=')[1];
      if(video_id){
        var ampersandPosition = video_id.indexOf('&');
        if(ampersandPosition != -1) {
          video_id = video_id.substring(0, ampersandPosition);
        }
        let url = 'https://www.youtube.com/embed/'+ video_id;
        return (<iframe width="560" height="315" src={url} frameborder="0" allowfullscreen></iframe>);
      }

  }

  render() {
    return (
      <div>
        {this.getEmbedForVideo(this.props.blast.attributes.video1url)}
        <Markdown source={this.props.blast.attributes.video1desc}/>
        {this.getEmbedForVideo(this.props.blast.attributes.video2url)}
        <Markdown source={this.props.blast.attributes.video2desc}/>
        {this.getEmbedForVideo(this.props.blast.attributes.video3url)}
        <Markdown source={this.props.blast.attributes.video3desc}/>
      </div>
    );
  }

}

export default SingleVideoBlast;
