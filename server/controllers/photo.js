const Photo = require("../models").Photo;
const User = require("../models").User;
const Comments = require("../models").Comments;
const Tags = require("../models").Tags;


module.exports = {
  // Add your routes here
  create (req, res) {

    Photo.create({
     title: req.body.title,
     photoUrl: req.body.photoUrl,
     userId: req.user.id,
     text: req.body.tags
    },
     { include: [ Tags ]
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
  },

  listOne (req, res) {
       Photo.findOne({
           where: {
             id: req.params.id
           }
        })
        .then(console.log("we're init"))
        .then(console.log(req.params.id))
       .then(photo => res.status(201).send(photo))
       .catch(error => res.status(400).send(error));
  },

  listComments (req, res) {
      Photo.findById( req.params.id , {
          include: {
              model: Comments
          }
      })
      .then(photo => res.status(201).send(photo))
      .catch(error => res.status(400).send(error));
  },

  listTags (req, res) {
      Photo.findById( req.params.id , {
          include: {
              model: Tags
          }
      })
      .then(photo => res.status(201).send(photo))
      .catch(error => res.status(400).send(error));
  }
}
