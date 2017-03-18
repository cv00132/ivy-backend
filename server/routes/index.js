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
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
    next();
  });
  // Add your routes here
  app.post('/users', UserController.create);
  app.post('/login', UserController.login);
  app.get('/users', UserController.users);
  app.get('/users/:id/photos', UserController.listPhotos);
  app.get('/users/:id/comments', UserController.listComments);


  app.post('/photos', middleware.authenticate, PhotoController.create);
  app.get('/photos', PhotoController.list);
  app.get('/photos/:id', PhotoController.listOne);
  app.get('/comments/photos/:id', PhotoController.listComments);
  app.put('/likes/:id', PhotoController.likes);
  app.get('/likes/:id', PhotoController.allLikes);


  app.post('/comments/:id', middleware.authenticate, CommentsController.create);
  app.get('/comments/:id', CommentsController.listByPhoto);

  app.get('/photos/:id/tags', TagsController.list);
  app.get('/tags/photos', TagsController.listAll);
};
