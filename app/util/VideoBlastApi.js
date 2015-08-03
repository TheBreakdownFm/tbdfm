import alt from '../alt'
import actions from '../actions/AppActions'
var Parse = require('parse').Parse;

let VideoBlastApi = {
getSingleVideoBlast(id){

  let VideoBlast = Parse.Object.extend('VideoBlast');
  let query = new Parse.Query(VideoBlast);
  if(id === 'first'){
    query.descending('ceatedAt');
    query.equalTo('published', true);
  } else {
    query.equalTo('objectId', id);
  }
  query.first({
    success: function (results) {
      actions.getSingleVideoBlastResult(results);
    },
    error: function (error) {
      actions.getSingelVideoBlastResult(false);
    }
  });
},

  getAllVideoBlasts(){

      var VideoBlast = Parse.Object.extend("VideoBlast");
      var query = new Parse.Query(VideoBlast);
      query.descending('ceatedAt');

    query.find({
        success: function(results) {
          actions.getAllVideoBlastsResult(results);
        },
        error: function(error) {
          actions.getAllVideoBlastsResult(false);
        }
      });
  },



}

export default VideoBlastApi;
