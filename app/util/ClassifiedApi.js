import alt from '../alt'
import actions from '../actions/AppActions'
var Parse = require('parse').Parse;

let ClassifiedsApi = {

  saveClassified(classifiedValues){
    var Classified = Parse.Object.extend("Classified");
    var newClassified = new Classified();

    newClassified.set('title', classifiedValues.title);
    newClassified.set('body', classifiedValues.body);
    newClassified.set('published', classifiedValues.published);
    newClassified.set('year', classifiedValues.year);
    newClassified.set('make', classifiedValues.make);
    newClassified.set('model', classifiedValues.model);
    newClassified.set('knownIssues', classifiedValues.knownIssues);
    newClassified.set('tradesEntertained', classifiedValues.tradesEntertained);
    newClassified.set('type', classifiedValues.type);
    newClassified.save(null, {
      success: function (classified) {
        // Execute any logic that should take place after the object is saved.
        actions.saveClassifiedResult(classified);
      },
      error: function (classified, error) {
        alert('Well, shit. I Failed to create the new Classifed, the error was: ' + error.message);
      }
    });
  },

  updateClassified(classifiedValues){
    var Classified = Parse.Object.extend("Classified");
    var newClassified = new Classified();

    newClassified.set("title", classifiedValues.title);
    newClassified.set("body", classifiedValues.body);
    newClassified.set('published', classifiedValues.published);
    newClassified.set("objectId", classifiedValues.objectId);
    newClassified.save(null, {
      success: function (classified) {
        // Execute any logic that should take place after the object is saved.
        actions.updateClassifiedResult(classified);
      },
      error: function (classified, error) {
        alert('Well, shit. I Failed to create the new Post, the error was: ' + error.message);
      }
    });
  },

  getClassifieds(offset){
    if(offset){

    } else {
      var Classified = Parse.Object.extend("Classified");
      var query = new Parse.Query(Classified);
      query.limit(10); //TODO: maybe no limit here?
      query.equalTo('published', true);
      query.find({
        success: function(results) {
          actions.getClassifiedsResult(results);
        },
        error: function(error) {
          actions.getClassifiedsResult(false);
        }
      });
    }
  },

  getSingleClassifed(id){
    var Classified = Parse.Object.extend("Classified");
    var query = new Parse.Query(Classified);
    query.equalTo('objectId', id);
    query.first({
      success: function(results) {
        actions.getSingleClassifiedResult(results);
      },
      error: function(error) {
        actions.getSingleClassifiedResult(false);
      }
    });
  },

  getPostsOfType(type, offset){

  }


}

export default ClassifiedsApi;
