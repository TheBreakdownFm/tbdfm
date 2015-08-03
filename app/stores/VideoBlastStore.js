import alt from '../alt';
import actions from '../actions/AppActions';
import videoBlastApi from '../util/VideoBlastApi';

class VideoBlastStore {
  constructor() {
    this.bindActions(actions);
    this.videoBlasts = [];
  }

  onGetSingleVideoBlast(blastId){
    videoBlastApi.getSingleVideoBlast(blastId);
  }

  onGetAllVideoBlasts(){
    videoBlastApi.getAllVideoBlasts();
  }
  onGetSingleVideoBlastResult(result){
    console.log(result);
    let onevideo = [];
    onevideo.push(result);
    this.videoBlasts = onevideo;
  }
  onGetAllVideoBlastsResult(result){
    if(result) {this.videoBlasts = result;}
  }
}

export default alt.createStore(VideoBlastStore, 'VideoBlastStore');
