const Link = require("../models").Link;
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
      linkId: req.params.link_id,
      userId: user_id,
      body: req.body.body
    })
    .then(comment => res.status(201).send(comment))
    .catch(error => res.status(400).send(error));
  },

  list (req, res) {
    Comments.findAll({
      where: {
        user_id: req.params.userId,
        link_id: req.params.linkId
      }
    })
      .then(comment => res.status(201).send(comment))
      .catch(error => res.status(400).send(error));
  }
};
