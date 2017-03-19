const User = require("../models").User;
const Photo = require("../models").Photo;
const Comments = require("../models").Comments;
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const appSecrets = require("../config/secrets");

module.exports = {
  // Add your routes here
  create (req, res) {
      let salt = bcrypt.genSaltSync(10);
      let hashedPass = bcrypt.hashSync(req.body.password, salt);
      User.create({
          username: req.body.username,
          email: req.body.email,
          password: hashedPass,
          salt: salt
     })
     .then(user => res.status(201).send(user))
     .catch(error => res.status(400).send(error));
 },

  login (req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (!user) {
          return res.status(401).send({ message: "No such email or wrong password." })
        }

        var input = bcrypt.hashSync(req.body.password, user.salt);
        if (input === user.password) {
          var token = jwt.encode({ id: user.id, name: user.username }, appSecrets.jwtSecret);
          var json = {
             user: user,
             token: token
           };
           return res.status(200).send(json);
        } else {
          return res.status(401).send({ message: "No such email or wrong password." })
        }
      })
       .catch(error => res.status(400).send(error));
   },

   getUsername (req, res) {
    User.findById( req.params.id, {
        attributes: [ 'username' ],
        include: [{
            model: Comments,
            attributes: ['photoId','text']
        }]
    })
     .then(user => res.status(201).send(user))
     .catch(error => res.status(400).send(error));
 },

   listPhotos (req, res) {
       User.findById( req.params.id , {
          include: [{
              model: Photo
          }]
       })
       .then(user => res.status(201).send(user))
       .catch(error => res.status(400).send(error));
   },

    listComments (req, res) {
        User.findById( req.params.id , {
           include: [{
               model: Comments
           }]
        })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error));
    },

   users (req, res) {
    User.findAll({})
     .then(user => res.status(201).send(user))
     .catch(error => res.status(400).send(error));
 }
}
