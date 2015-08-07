import alt from '../alt';

class appActions {
  constructor() {
    this.generateActions(
      'appStart',
      //posts
      'getPosts',
      'getAllPosts',
      'getPostsResult',
      'getSinglePost',
      'getSinglePostResult',
      'getPostsOfType',
      'getPostsOfTypeResult',


      //postAdmin
      'savePost',
      'savePostResult',
      'updatePost',
      'updatePostResult',


      //video pages
      'getSingleVideoBlast',
      'getSingleVideoBlastResult',
      'getAllVideoBlasts',
      'getAllVideoBlastsResult',
      'getVideosForDate',
      'videoForDateResult',

      //videoAdmin
      'saveVideosForDate',
      'saveVideosForDateResult',
      'updateVideosForDate',
      'updateVideosForDateResult',

      //user shit
      'logIn',
      'logInResult',
      'logOut',
      'logOutResult',

      //Classifieds
      'getClassifieds',
      'getClassifiedsResult',
      'getSingleClassified',
      'getSingleClassifiedResult'
    );
   }
}
export default alt.createActions(appActions);
