const Photo = require("../models").Photo;
const User = require("../models").User;
const Comments = require("../models").Comments;

module.exports = {
  create (req, res) {

    Comments.create({
      photoId: req.params.id,
      userId: user_id,
      text: req.body.text
    })
    .then(comment => res.status(201).send(comment))
    .catch(error => res.status(400).send(error));
  },

  list (req, res) {
    Comments.findAll({
      where: {
        photoId: req.params.id
      }
    })
      .then(comment => res.status(201).send(comment))
      .catch(error => res.status(400).send(error));
  }
};
