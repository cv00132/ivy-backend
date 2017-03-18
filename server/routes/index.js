// Require any middleware here.
const middleware = require("../middleware");

// Require your controllers here
const UserController = require('../controllers/user');
const PhotoController = require('../controllers/photo');
const CommentsController = require('../controllers/comments');
const TagsController = require('../controllers/tags');



module.exports = (app) => {

//Allows frontend to communicate to the backend; CORS
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-token");
    next();
  });
  // Add your routes here
  app.post('/users', UserController.create);
  app.post('/login', UserController.login);
  app.get('/users', UserController.users);
  app.get('/users/:userId/photos', UserController.listPhotos);
  app.get('/users/:userId/comments', UserController.listComments);


  app.post('/photos', middleware.authenticate, PhotoController.create);
  app.get('/photos', PhotoController.list);
  app.get('/photos/:photoId', PhotoController.listOne);

  app.post('/comments/:photoId', middleware.authenticate, CommentsController.create);
  app.get('/comments/:photoId', CommentsController.listByPhoto);

  app.get('/comments/photos/:photoId', PhotoController.listComments);

  app.post('/photos/:photoId/tags', TagsController.createTags);
};
