// Require any middleware here.
const middleware = require("../middleware");

// Require your controllers here
const UserController = require('../controllers/user');
const PhotoController = require('../controllers/photo');
const CommentsController = require('../controllers/comments');
const TagsController = require('../controllers/tags');
const PhotoTagsController = require('../controllers/phototags');



module.exports = (app) => {

//Allows frontend to communicate to the backend; CORS
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-token");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
    next();
  });
  // Add your routes here
  app.post('/users', UserController.createUser);
  app.post('/login', UserController.login);
  app.get('/users', UserController.getUsers);
  app.get('/users/:id/photos', UserController.listUserPhotos);
  app.get('/users/:id/comments', UserController.listUserComments);
  app.get('/users/name/:id', UserController.getUsername);


  app.post('/photos', PhotoController.uploadPhoto);
  app.get('/photos', PhotoController.listPhotos);
  app.get('/photos/:id', PhotoController.listOnePhoto);
  app.put('/likes/:id', PhotoController.likesPhoto);
  app.get('/photos/likes/all', PhotoController.allPhotoLikes);
  app.get('/likes/:id', PhotoController.getPhotoLikes);

  app.post('/comments/:id', middleware.authenticate, CommentsController.createComments);
  app.get('/comments/:id', CommentsController.listCommentsByPhoto);
  app.get('/comments/by/:id', CommentsController.linkUserToComments)

  app.post('/tags', TagsController.createTag)
  app.get('/photos/:id/tags', TagsController.listTags);
  app.get('/tags/photos', TagsController.listAllTags);

  app.post('/phototags', PhotoTagsController.createPhotoTag);
};
