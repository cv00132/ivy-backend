const Photo = require("../models").Photo;
const User = require("../models").User;
const Comments = require("../models").Comments;

module.exports = {
  createComments (req, res) {

    Comments.create({
      photoId: req.params.id,
      userId: req.user.id,
      text: req.body.text
    })
    .then(comment => res.status(201).send(comment))
    .catch(error => res.status(400).send(error));
  },

  listCommentsByPhoto (req, res) {
    Comments.findAll({
      where: {
        photoId: req.params.id
      }
    })
      .then(comment => res.status(201).send(comment))
      .catch(error => res.status(400).send(error));
  },

  linkUserToComments (req, res) {
    Comments.findAll({
      where: {
        userId: req.params.id
      }
    })
      .then(username => res.status(201).send(username))
      .catch(error => res.status(400).send(error));
  }
};
