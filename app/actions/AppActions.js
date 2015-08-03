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
        'logOutResult'
        );
   }
}
export default alt.createActions(appActions);
