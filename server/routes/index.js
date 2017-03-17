// Require your controllers here
const UserController = require('../controllers/user');
const PhotoController = require('../controllers/photo');
const CommentsController = require('../controllers/comments');



module.exports = (app) => {

//Allows frontend to communicate to the backend
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  // Add your routes here
  app.post('/users', UserController.create);
  app.post('/login', UserController.login);
  app.get('/users', UserController.users);


  app.post('/photos/:id', PhotoController.create);
  app.get('/photos', PhotoController.list);

  app.post('/comments', CommentsController.create);
  app.post('/comments', CommentsController.list);

};
