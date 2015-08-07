//import styles from './_App.scss';
import React from 'react/addons';
import ReactMixin from 'react-mixin';
import actions from '../../actions/AppActions';
import userapi from '../../util/UserApi';
import appstore from '../../stores/AppStore';
var Parse = require('parse').Parse;

class NewClassified  extends React.Component {


  constructor() {
    super();
    this.state = {
      published: false
    };

  }


  createClassified(e){
    e.preventDefault();
    actions.createClassified(this.state);
  }

  render() {
    return (

      <form>
        <select valueLink={this.linkState('type')}>
          <option value='car'> Blag </option>
          <option value='part'> Podcast </option>
        </select>
        <br/>
        <input type="text" valueLink={this.linkState('year')} placeholder="Year" />
        <br/>
        <input type="text" valueLink={this.linkState('make')}placeholder="Make" />
        <br/>
        <input type='text' valueLink={this.linkState('model')} placeholder='Model'/>
        <br/>
        <input type='text' valueLink={this.linkState('buildThread')} placeholder='Build Thread' />
        <br/>
        <textarea valueLink={this.linkState('knownIssues')} placeholder='Known issues' />
        <br/>
        <textarea valueLink={this.linkState('body')} placeholder='Describe it.' />
        <br/>

        <select valueLink={this.linkState('tradesEntertained')}>
          <option value='yes'> Yes </option>
          <option value='no'> No </option>
        </select>



        <button onClick={this.createClassified.bind(this)} >Create</button>
        <p> Create will only create, you can publish from the preview/edit screen. check your work :)</p>
      </form>

    );
  }
}

NewClassified.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default NewClassified;


ReactMixin(NewClassified.prototype, React.addons.LinkedStateMixin);
