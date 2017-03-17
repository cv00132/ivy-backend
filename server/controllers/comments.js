const Photo = require("../models").Photo;
const User = require("../models").User;
const Comments = require("../models").Comments;
const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");

module.exports = {
  create (req, res) {
    var token = req.headers['access-token'];
    var decoded = jwt.decode(token, appSecrets.jwtSecret);
    var user_id = decoded.id;
    Comments.create({
      linkId: req.params.linkId,
      userId: user_id,
      text: req.body.text
    })
    .then(comment => res.status(201).send(comment))
    .catch(error => res.status(400).send(error));
  },

  list (req, res) {
    Comments.findAll({
      where: {
        userId: req.params.userId,
        linkId: req.params.linkId
      }
    })
      .then(comment => res.status(201).send(comment))
      .catch(error => res.status(400).send(error));
  }
};
