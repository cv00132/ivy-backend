const Photo = require("../models").Photo;
const User = require("../models").User;
const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");


module.exports = {
  // Add your routes here
  create (req, res) {

    Photo.create({
    title: req.body.title,
    photoUrl: req.body.photoUrl,
    userId: req.user.id
    })
    .then(photo => res.status(201).send(photo))
    .catch(error => res.status(400).send(error));
 },

  list (req, res) {
       Photo.findAll({
           order: [ [ 'createdAt', 'DESC' ]]
       })
       .then(photo => res.status(201).send(photo))
       .catch(error => res.status(400).send(error));
  }
}
